const loadMeals = (search) => {
	const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`;
	fetch(url)
		.then((response) => response.json())
		.then((data) => displayMeals(data.meals));
};
const displayMeals = (meals) => {
	const mealContainer = document.getElementById("meal-container");
	mealContainer.innerHTML = ``;
	meals.forEach((meal) => {
		// console.log(meal);
		const mealDiv = document.createElement("div");
		mealDiv.classList.add("col");
		mealDiv.innerHTML = `
      <div onclick="loadMealDetails(${meal.idMeal})" class="card">
				<img src="${meal.strMealThumb}" class="w-auto" alt="..." />
				<div class="card-body">
					<h5 class="card-title">${meal.strMeal}</h5>
					<p class="card-text">
						${meal.strInstructions.slice(0, 150)}
					</p>
				</div>
			</div>
    `;
		mealContainer.appendChild(mealDiv);
	});
};
const searchFood = () => {
	const searchField = document.getElementById("search-field");
	const searchFieldText = searchField.value;
	loadMeals(searchFieldText);
	searchField.value = "";
};
const loadMealDetails = (mealId) => {
	const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
	fetch(url)
		.then((response) => response.json())
		.then((data) => displayMealDetails(data.meals[0]));
};
const displayMealDetails = (meal) => {
	const detailContainer = document.getElementById("detail-container");
	detailContainer.innerHTML = ``;
	const mealDiv = document.createElement("div");
	mealDiv.classList.add("card");
	mealDiv.innerHTML = `
    <img src="${meal.strMealThumb}" class="card-img-top" alt="..." />
		<div class="card-body">
			<h5 class="card-title">${meal.strMeal}</h5>
			<p class="card-text">
			  ${meal.strInstructions}
			</p>
		</div>
  `;
	detailContainer.appendChild(mealDiv);
};
loadMeals("");
