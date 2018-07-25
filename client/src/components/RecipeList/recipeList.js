import React, { Component } from 'react';
import { Button, Form, Card, Rating } from 'semantic-ui-react'

 const  RecipeList  = (props ) => (
    <Card.Group centered style = {{ marginTop : '3rem'}}>
      {props.recipes && props.recipes.map( (recipe, index) =>
         (
            <Card key = {index}>
              <Card.Content textAlign = 'right'>
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
                <Card.Header textAlign = 'center'> { recipe.title || 'undef' }</Card.Header>
                <Card.Description> { recipe.description || 'undef'} </Card.Description>
              </Card.Content>
              <Card.Content textAlign = 'center'>
                 <Rating 
                    maxRating={5}  
                    defaultRating = {recipe.rating }
                    onRate = { (e, { rating }) => props.handleRateRecipe(recipe._id, rating) }
                 /> 
              </Card.Content>
            </Card>
          )
      
     )}
     </Card.Group>
 )
    export default RecipeList
  
