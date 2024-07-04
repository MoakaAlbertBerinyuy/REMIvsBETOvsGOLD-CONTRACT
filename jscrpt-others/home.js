const url = 'https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/random';
const options = {
	method: 'GET',
	headers: {
		accept: 'application/json',
		'X-RapidAPI-Key': '7df11275b8msh23408c05c6e5183p1ec41ejsn04b39fbf81da',
		'X-RapidAPI-Host': 'matchilling-chuck-norris-jokes-v1.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}