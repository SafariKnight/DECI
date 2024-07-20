/**** Fares ****/

const recipeInput = document.querySelector(".input__name");
const addRecipeBtn = document.querySelector(".input__add");
const searchInput = document.querySelector(".input__search");
const recipeList = document.querySelector(".recipe__list");
const actualRecipes = [];
let renderedRecipes = [];

function renderRecipes() {
  recipeList.innerHTML = "";
  searchRecipes();
  renderedRecipes.forEach((recipe, index) => {
    const recipeDiv = document.createElement("div");
    recipeDiv.classList.add("recipe__content");
    recipeDiv.innerHTML = `
      <span>${recipe}</span>
      <div class="recipe__buttons">
          <button onclick="alert('${recipe}')" class="edit">View</button>
          <button onclick="editRecipe(${index})" class="edit">Edit</button>
          <button onclick="removeRecipe(${index})" class="edit">Remove</button>
      </div>
    `;
    recipeList.appendChild(recipeDiv);
  });
}

addRecipeBtn.addEventListener("click", () => {
  const recipe = recipeInput.value.trim();
  console.log(recipe);
  if (recipe) {
    actualRecipes.push(recipe);
    renderedRecipes.push(recipe);
    recipeInput.value = "";
    renderRecipes();
  }
});

const editRecipe = (i) => {
  const newRecipe = prompt(`Edit Recipe ${actualRecipes[i]}`);
  if (newRecipe) {
    actualRecipes[i] = newRecipe;
    renderedRecipes[i] = newRecipe;
    renderRecipes();
  }
};
const viewRecipe = (i) => {
  alert(`View Recipe: ${renderedRecipes[i]}`);
};
const removeRecipe = (i) => {
  actualRecipes.splice(i, 1);
  renderRecipes();
};

/**** Kareem ****/
/*** Search ***/

function searchRecipes(e) {
    try {
      e.preventDefault();
    } catch (Exception) {}
    const text = inputSearch.value;
    renderedRecipes = actualRecipes.filter((recipe) =>
      recipe.toLowerCase().includes(text.toLowerCase()),
    );
    // renderRecipes();
}

const inputSearch = document.querySelector(".input__search");
inputSearch.addEventListener("input", () => {
    searchRecipes()
    renderRecipes()
});
