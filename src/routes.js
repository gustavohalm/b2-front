import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import CategoryList from './pages/CategoryList';
import CategoryCreate from './pages/CategoryCreate';
import ProductList from './pages/ProductList';
import ProductCreate from './pages/ProductCreate';

const Routes = () =>{
    return(    
        <BrowserRouter basename='/b2-blue'>
            <Switch>
                <Route exact path='/categorias' component={CategoryList} />
                <Route exact path='/categorias/criar' component={CategoryCreate} />
                <Route exact path='/categorias/editar/:id' component={CategoryCreate}/>

                <Route exact path='/produtos' component={ProductList}/>
                <Route exact path='/produtos/criar' component={ProductCreate}/>
                
            </Switch>   
        </BrowserRouter>
    )
}
export default Routes;