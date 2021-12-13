const getAllNews = async () => {
	let news 

	await fetch(`https://newsapi.org/v2/everything?sources=bbc-news`, {
		method: 'GET',
		headers: {
			'X-API-KEY': '6e7341e5637946efa7e2e38b725ff50a',
			'Content-Type': 'application/x-www-form-urlencoded',
		},
	}).then(response => response.json())
	.then(data => {
		news = data
	})
	.catch((error) => {
		console.error('Error:', error);
	});
	return news;
}

const searchNewsTitle = async (keyword) => {
	await fetch(`https://newsapi.org/v2/everything?sources=bbc-news&q=${keyword}`, {
		method: 'GET',
		headers: {
			'X-API-KEY': '6e7341e5637946efa7e2e38b725ff50a',
			'Content-Type': 'application/x-www-form-urlencoded',
		},
	}).then(response => response.json())
	.then(data => {
		news = data
	})
	.catch((error) => {
		console.error('Error:', error);
	});
	return news;
}

export {
	getAllNews,
	searchNewsTitle
}