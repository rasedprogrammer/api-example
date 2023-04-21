const loadAsyncRandomUser = () => {
	const url = `https://randomuser.me/api/?gender=female`;
	fetch(url)
		.then((response) => response.json())
		.then((data) => displayAsyncRandomUser(data.results[0]))
		.catch((err) => console.log(err));
};
const loadAsync = async () => {
	try {
		const url = `https://randomuser.me/api/?gender=female`;
		const res = await fetch(url);
		const data = await res.json();
		displayAsyncRandomUser(data);
	} catch (err) {
		console.log(err);
	}
};
const displayAsyncRandomUser = (user) => {
	console.log(user);
};
