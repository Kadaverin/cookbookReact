import React, { Component } from 'react';
import { Button, Form, Card, Rating } from 'semantic-ui-react'

 const  RecipeList  = (props ) => (
    <Card.Group centered style = {{ marginTop : '3rem'}}>
      {props.recipes && props.recipes.map( (recipe, index) =>
         (
            <Card key = {index}>
              <Card.Content textAlign = 'right'>
                 <Button circular icon='edit' compact   size = 'mini'></Button>
                 <Button circular icon='delete' compact size = 'mini' ></Button>
              </Card.Content>
              <Card.Content>
                <Card.Header textAlign = 'center'> { recipe.title || 'undef' }</Card.Header>
                <Card.Description> { recipe.description || 'undef'} </Card.Description>
              </Card.Content>
              <Card.Content textAlign = 'center'>
                 <Rating maxRating={5} /> 
              </Card.Content>
            </Card>
          )
      
     )}
     </Card.Group>
 )
    export default RecipeList
  
