function Header() {
	return (
		<header className="z-10 bg-gray-300 sticky top-0 overflow-hidden flex items-center justify-center">
			<div className="container mx-auto px-4 py-4 flex items-center">
				<a href="/" className="mr-auto md:w-48 flex-shrink-0">
					<img
						className="h-8 md:h-10"
						src="https://fptsoftware.com/-/media/project/fpt-software/fso/systems/logo/logo.svg?as=1&iar=0&extension=webp&modified=20230519141554&hash=A28FD0836414E4F10707ECCC57D396B2"
						alt=""
					/>
				</a>

				<nav className="contents">
					<ul className="ml-4 xl:w-48 flex items-center justify-end">
						<li className="ml-2 lg:ml-4 relative inline-block">
							<a className="" href="/cart">
								{/* <div className="absolute -top-1 right-0 z-10 bg-yellow-400 text-xs font-bold px-1 py-0.5 rounded-sm">
									{totalMovieInCart}
								</div> */}
								<svg
									className="h-9 lg:h-10 p-2 text-black svg-inline--fa fa-shopping-cart fa-w-18 fa-9x"
									aria-hidden="true"
									focusable="false"
									data-prefix="far"
									data-icon="shopping-cart"
									role="img"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 576 512"
								>
									<path
										fill="currentColor"
										d="M551.991 64H144.28l-8.726-44.608C133.35 8.128 123.478 0 112 0H12C5.373 0 0 5.373 0 12v24c0 6.627 5.373 12 12 12h80.24l69.594 355.701C150.796 415.201 144 430.802 144 448c0 35.346 28.654 64 64 64s64-28.654 64-64a63.681 63.681 0 0 0-8.583-32h145.167a63.681 63.681 0 0 0-8.583 32c0 35.346 28.654 64 64 64 35.346 0 64-28.654 64-64 0-18.136-7.556-34.496-19.676-46.142l1.035-4.757c3.254-14.96-8.142-29.101-23.452-29.101H203.76l-9.39-48h312.405c11.29 0 21.054-7.869 23.452-18.902l45.216-208C578.695 78.139 567.299 64 551.991 64zM208 472c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm256 0c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm23.438-200H184.98l-31.31-160h368.548l-34.78 160z"
									></path>
								</svg>
							</a>
						</li>
					</ul>
				</nav>

				<div className="ml-4 hidden sm:flex flex-col font-bold">
					{/* <span className="text-xs text-white">Your Cart</span>
					<span>${totalPriceInCart}</span> */}
				</div>
			</div>
		</header>
	);
}

export default Header;
