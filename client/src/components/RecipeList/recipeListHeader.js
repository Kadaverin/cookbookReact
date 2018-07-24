import React, { Component } from 'react';

import { Grid , Checkbox, Button} from 'semantic-ui-react'
import { Input } from 'semantic-ui-react'


export default class RecipeListHeader extends Component{
  render(){
    return(
         <Grid centered style = { {marginTop : '2rem'} }>
           
          <Grid.Row > 
            <Input icon='search' placeholder='Search by title' style = { {marginRight : '2rem'} }/>
            <Button color='teal' onClick = {this.props.goToCreatRecipeComponent}>Add recipe</Button>
          </Grid.Row>
          <Grid.Row>
             <Checkbox toggle label='sort by rating'/>
          </Grid.Row>
        </Grid>       
    )
  }
}