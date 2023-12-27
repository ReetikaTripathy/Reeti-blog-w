// Sample array of recipes
const recipes = [
    "Pasta Carbonara",
    "Mango Salsa Chicken",
    "Vegetable Stir Fry",
    "Grilled Salmon with Lemon Butter",
    "Tiramisu"
];

// Function to generate a random recipe
function generateRandomRecipe() {
    const randomIndex = Math.floor(Math.random() * recipes.length);
    return recipes[randomIndex];
}

// Example usage
const randomRecipe = generateRandomRecipe();
console.log("Today's special: " + randomRecipe);