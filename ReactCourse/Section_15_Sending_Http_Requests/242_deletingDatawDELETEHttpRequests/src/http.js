export async function fetchAvailablePlaces(url) {
	const response = await fetch(url);

	if (!response.ok) {
		throw new Error("Fetching failed..");
	}

	const data = await response.json();

	return data.places;
}

export async function updateUserPlaces(url, places) {
	const response = await fetch(url, {
		method: "PUT",
		body: JSON.stringify({ places: places }),
		headers: {
			"Content-Type": "application/json",
		},
	});

	if (!response.ok) {
		throw new Error("Sending data failed..");
	}

	const resData = await response.json();

	return resData.message;
}
