import { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import GetImages from "../services/api";
import ImageCard from "./ImageCard";
import { useEffect, useState } from "react";

import loadingSVG from "../assets/loading.svg";
import Search from "./Search";
import ButtonUI from "./UI/ButtonUI";

function getRandomNumb(max, min) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default function Gallery() {
	const [apiLink, setApiLink] = useState(
		`https://picsum.photos/v2/list?page=${getRandomNumb(10, 2)}&limit=${getRandomNumb(20, 10)}`,
	);

	const { data, loading, error } = GetImages(apiLink);
	const [keyword, setKeyword] = useState(null);
	const [filteredResults, setFilteredResults] = useState([]);

	const [wait, setWait] = useState(true);

	useEffect(() => {
		const timer = setTimeout(() => {
			setWait(false);
		}, 2000);

		return () => {
			clearTimeout(timer);
		};
	}, []);

	useEffect(() => {
		setFilteredResults(() => {
			if (data) {
				if (keyword) {
					let updatedList = [...data];

					updatedList = updatedList.filter((f) => {
						if (f.author.toLowerCase().trim().includes(keyword.trim())) {
							return true;
						}
					});

					return updatedList;
				}

				return [...data];
			}
			if (!data) {
				return [];
			}
		});
	}, [data, keyword]);

	return (
		<>
			<Search onSetKeyword={setKeyword} type="text" classString={"mb-4"} />
			<ButtonUI
				onClick={() => {
					setApiLink(
						`https://picsum.photos/v2/list?page=${getRandomNumb(10, 2)}&limit=${getRandomNumb(20, 10)}`,
					);
				}}
				title="Get new images"
			/>

			<section
				className="grid sm:grid-cols-2 sm:gap-1 sm:px-2 sm:py-4
            md:grid-cols-3 md:gap-2 md:px-4
            lg:grid-cols-4 lg:gap-3 md:px-6"
			>
				{wait && (
					<SkeletonTheme>
						<div>
							<img src={loadingSVG} alt="Loading.." width={50} height={50} />
							<h2>Loading..</h2>
						</div>
					</SkeletonTheme>
				)}
				{error && <h2>Something went wrong..</h2>}
				{!wait &&
					filteredResults.map((img) => {
						const { author, download_url, id, url } = img;

						return (
							<ImageCard
								key={id}
								imageAlt={url}
								imageSrc={download_url}
								author={author}
								title={author}
							/>
						);
					})}
			</section>
		</>
	);
}
