import { call, put, takeEvery } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';

import axiosClient from '@/api/axios.client';
import { SagaActions } from '@/enums/saga.enum';
import { setListMovieByGenres } from '@/store/reducers/movie.reducer';
import { setTotalMovieInCart, setTotalPriceInCart } from '@/store/reducers/cart.reducer';

function* fetchListMovies() {
	const storeListMoviesByGenres: TMovieGenres[] = [];

	//* API 1
	const responseWatchlist: AxiosResponse<TResponseListMovies> = yield call(
		axiosClient.get,
		`${import.meta.env.VITE_TMDB_ACCOUNT}/watchlist/movies`,
	);
	const { results: resultsWatchlist, total_results } = responseWatchlist.data;

	//* API 2
	const responseGenres: AxiosResponse<TResponseGenres> = yield call(axiosClient.get, '/genre/movie/list');
	const { genres } = responseGenres.data;

	//* API 3
	const responseTrending: AxiosResponse<TResponseListMovies> = yield call(axiosClient.get, '/trending/movie/week');
	const { results: resultsTrending } = responseTrending.data;

	if (responseWatchlist) {
		const totalPrice: number = resultsWatchlist.reduce(
			(acc: number, movie: TMovie) => acc + Math.floor(movie.popularity),
			0,
		);

		yield put(setTotalMovieInCart(total_results));
		yield put(setTotalPriceInCart(totalPrice));
	}

	if (resultsTrending && genres) {
		// Trending in TOP
		storeListMoviesByGenres.push({
			genre: 'Trending',
			movies: resultsTrending,
		});

		// only get 10 api about genres
		for (const genre of genres.slice(0, 5)) {
			//* API 4
			const response: AxiosResponse<TResponseListMovies> = yield call(axiosClient.get, '/discover/movie', {
				params: {
					with_genres: genre.id,
					sort_by: 'popularity.desc',
				},
			});
			const { results } = response.data;

			// push another movie into Array
			storeListMoviesByGenres.push({
				genre: genre.name,
				movies: results,
			});
		}

		storeListMoviesByGenres.forEach((movieGenre: TMovieGenres): void => {
			// get Array include id of movie in Watchlist
			const allMovieIdInWatchList: number[] = resultsWatchlist.map((watchlist: TMovie) => watchlist.id);

			movieGenre.movies.forEach((movie: TMovie) => {
				if (allMovieIdInWatchList.includes(movie.id)) movie.isInCart = true;
				else movie.isInCart = false;
			});
		});

		yield put(setListMovieByGenres(storeListMoviesByGenres));
	}
}

export function* getListMovies() {
	yield takeEvery(SagaActions.GET_LIST_MOVIES, fetchListMovies);
}
