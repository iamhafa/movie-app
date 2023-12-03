import { Button, Input } from '@/components/atoms';

type TSearchInput = {
	value: string;
	placeHolder?: string;
	type?: 'text' | 'number' | 'email';
	changeHandler: (e: string) => void;
	submitHandler: (e: any) => void;
};

function SearchInput(props: TSearchInput) {
	return (
		<form className="w-96" onSubmit={(e: React.FormEvent<HTMLFormElement>) => props.submitHandler(e)}>
			<label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
				Search
			</label>
			<div className="relative">
				<div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
					<svg
						className="w-4 h-4 text-gray-500 dark:text-gray-400"
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 20 20"
					>
						<path
							stroke="currentColor"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
						/>
					</svg>
				</div>
				<Input
					value={props.value}
					type={props.type}
					placeHolder={props.placeHolder}
					changeHandler={props.changeHandler}
				/>
				<Button text="Search" type="submit" />
				<button
					type="submit"
					className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
				>
					Search
				</button>
			</div>
		</form>
	);
}

export default SearchInput;
