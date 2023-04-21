const loadCounters = () => {
	fetch("https://restcountries.com/v3.1/all")
		.then((response) => response.json())
		.then((data) => displayCountries(data));
};

const displayCountries = (countries) => {
	const countriesContainer = document.getElementById("countries-container");
	countries.forEach((country) => {
		const countriesDiv = document.createElement("div");
		countriesDiv.classList.add("country");
		countriesDiv.innerHTML = `
    <h3>Name: ${country.name.common}</h3>
    <h3>Region: ${country.region}</h3>
      <p>Capital: ${country.capital ? country.capital[0] : "No Capital"}</p>
      <button onclick="loadCountryDetails('${country.cca2}')">Details</button>
    `;
		countriesContainer.appendChild(countriesDiv);
	});
};
const loadCountryDetails = (code) => {
	const url = `https://restcountries.com/v3.1/alpha/${code}`;
	fetch(url)
		.then((response) => response.json())
		.then((data) => displayCountryDetails(data[0]));
};
const displayCountryDetails = (country) => {
	const countryDetails = document.getElementById("display-country-details");
	countryDetails.innerHTML = `
    <h3>Name: ${country.name.common}</h3>
    <img src=${country.flags.png} alt="">
  `;
};
loadCounters();
