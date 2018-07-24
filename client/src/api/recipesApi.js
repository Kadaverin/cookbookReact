const api = { 

  fetchAllRecipes: () => (
    fetch('/api/recipes/')
    .then(res =>  res.json())
  ),

  createRecipy : (recipe) => (
    fetch('/api/recipes/' , createOptionsObject('POST' , recipe))
    .then(res => res.json())
  ),

  fetchRecipeById: (id) => (
    fetch(`/api/recipes/${id}`)
    .then(res => res.json())
  ),

  patchRecipe: (id , updatedRecipy) =>(
    fetch(`/api/recipes/${id}` , createOptionsObject('PATCH' , updatedRecipy))
    .then(res => res.json())
  ),

  deleteRecipe: (id) => (
    fetch(`/api/recipes/${id}` , { method : 'DELETE'})
    .then(res => res.json())
  )
}

function createOptionsObject(method, body){
  const prop = {
      method: method, 
      headers: {"content-type": "application/json"}, 
  }
  body && (prop.body = JSON.stringify(body))
  return prop
}

export default api