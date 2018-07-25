import React from 'react';
import { Button, Card } from 'semantic-ui-react'
import Rating from 'react-rating'
import PropTypes from 'prop-types'

 const  RecipeList  = (props ) => (
    <Card.Group centered style = {{ marginTop : '3rem'}}>
      { props.recipes && props.recipes.map( (recipe, index) =>
         (
            <Card key = {index} >
              <Card.Content textAlign = 'right'>
                <Button 
                    circular 
                    icon='eye' 
                    compact size = 'mini' 
                    onClick = { () => props.handleVeiwRecipe(recipe) }
                 />
                 <Button 
                    circular 
                    icon='edit' 
                    compact   
                    size = 'mini'
                    onClick = { () => props.goToEditRecipe(recipe._id) }
                 />
                 <Button 
                    circular 
                    icon='delete' 
                    compact size = 'mini' 
                    onClick = { () => props.handleDeleteRecipe(recipe._id) }
                 />
              </Card.Content>
              <Card.Content>
                <Card.Header textAlign = 'center'> { recipe.title }</Card.Header>
                <Card.Description> { recipe.description } </Card.Description>
              </Card.Content>
              <Card.Content textAlign = 'center'>
                <Rating 
                  initialRating = { recipe.rating }
                  onChange = { (rate) => props.handleRateRecipe(recipe._id, rate) }
                  emptySymbol="far fa-star fa-sm"
                  fullSymbol="fas fa-star fa-sm"
                />
              </Card.Content>
            </Card>
          )
      
     )}
     </Card.Group>
 )
    export default RecipeList
  
RecipeList.propTypes = {
  handleRateRecipe: PropTypes.func.isRequired,
  handleDeleteRecipe: PropTypes.func.isRequired,
  goToEditRecipe: PropTypes.func.isRequired,
  handleVeiwRecipe: PropTypes.func.isRequired,

  recipes: PropTypes.arrayOf(PropTypes.shape({
    title : PropTypes.string,
    rating: PropTypes.number,
    decription: PropTypes.string
  })),
}
