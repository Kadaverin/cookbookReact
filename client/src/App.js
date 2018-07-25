import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { Route, Switch, Redirect} from 'react-router-dom';
import store from './store'
import history from './store/history'
import MainRecipesPage from './containers/Main/mainPage'
import CreatgResipe from './containers/CreateRecipy/createRecipe';
import EditResipe from './containers/EditRecipe/editRecipe';
import SingleRecipe from './containers/SingleRecipe/singleRecipe';


class App extends Component {
  render() {
    return (
      <Provider store={store}>     
        <ConnectedRouter history={history}>
          <Switch>
            <Route path = '/' exact render = { ()=> <Redirect to ='/recipes'/>} />
            <Route path = '/recipes' exact component = { MainRecipesPage } />
            <Route path = '/recipes/new' exact component = { CreatgResipe } />
            <Route path = '/recipes/:id/edit' exact component = { EditResipe } />
            <Route path = '/recipes/:id' exact component = { SingleRecipe } />
          </Switch>
        </ConnectedRouter> 
      </Provider>
    );
  }
}

export default App;
