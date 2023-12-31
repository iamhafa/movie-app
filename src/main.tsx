import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from '@/store';
import App from '@/App.tsx';
import Cart from '@/pages/Cart';
import Movie from '@/pages/Movie.tsx';
import Genres from '@/pages/Genres';
import { Footer, Header } from '@/components/templates';

// tailwindcss
import '@/assets/main.css';
import '@/assets/styles.scss';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	// <React.StrictMode>
	<Provider store={store}>
		<Header />
		<BrowserRouter>
			<Routes>
				<Route path="*" element={<Navigate replace to="/" />} />
				<Route path="" Component={App} />
				<Route path="movie/:movie_id" Component={Movie} />
				<Route path="genres/:genres_name" Component={Genres} />
				<Route path="cart" Component={Cart} />
			</Routes>
		</BrowserRouter>
		{/* <Footer /> */}
	</Provider>,
	// </React.StrictMode>,
);
