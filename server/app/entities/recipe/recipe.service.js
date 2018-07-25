const recipeRepository = require('./recipe.repository');

class RecipeService {
	getAllRecipes() {
		return recipeRepository.findAll();
	}

	getRecipeById(id) {
		return recipeRepository.findById(id);
	}

	addRecipe(recipe) {
		return recipeRepository.add(recipe);
	}

	updateRecipe(id, recipe) {
		return recipeRepository.update({ _id: id }, recipe);
	}

	deleteRecipe(id) {
		return recipeRepository.delete({ _id: id });
	}

	changeRecipeRating(id, newRating){
		console.log( "SERVICE _____________________________")
		console.log(newRating)
		return recipeRepository.update({ _id : id } , { $set : { "rating" : newRating } })
	}

}

module.exports = new RecipeService();