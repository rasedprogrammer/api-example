const loadUsers = () => {
	fetch("https://randomuser.me/api/?results=20")
		.then((res) => res.json())
		.then((data) => displayUsers(data.results));
};

const displayUsers = (users) => {
	const userContainer = document.getElementById("users-container");
	for (const user of users) {
		console.log(user);
		const userDiv = document.createElement("div");
		userDiv.classList.add("user");
		userDiv.innerHTML = `
      <h3>User Name: ${user.name.title} ${user.name.first} ${user.name.last}</h3>
      <img src=${user.picture.large} alt="">
      <p>Email: ${user.email}</p>
      <p>Phone: ${user.phone}</p>
      <p>Address: ${user.location.street.number} ${user.location.street.name} ${user.location.city} ${user.location.state} ${user.location.country}-${user.location.postcode}</p>
    `;
		userContainer.appendChild(userDiv);
	}
};
loadUsers();
