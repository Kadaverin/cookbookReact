const api = { 

  fetchAllRecipes: () => {
    fetch('/api/recipes/')
    .then(res => {console.log(res); res.json()})
  },

  postRecipy : (recipy) => {
    fetch('/api/recipes/' , { method: 'POST', body: recipy})
    .then(res => res.json())
  },
  fetchRecipeById: (id) => {
    fetch(`/api/recipes/${id}`)
    .then(res => res.json())
  },

  patchRecipe: (id , updatedRecipy) => {
    fetch(`/api/recipes/${id}` , { method : 'PATCH' , body : updatedRecipy})
    .then(res => res.json())
  },

  deleteRecipe: (id) => {
    fetch(`/api/recipes/${id}` , { method : 'DELETE'})
    .then(res => res.json())
  }
}

export default api