export async function fetchAvailablePlaces(url) {
	const response = await fetch(url);

	if (!response.ok) {
		throw new Error("Fetching failed..");
	}

	const data = await response.json();

	return data.places;
}
