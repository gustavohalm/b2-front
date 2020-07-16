import React, { useEffect } from 'react';
import FormCategoryRegister from '../../components/FormCategoryRegister';
import FormCategoryUpdate from '../../components/FormCategoryUpdate'

const CategoryCreate = (props) =>{
    const {id} = props.match.params;
    
    return(
        <div className="container">
            <div className="row">
                {id ? <h2>Edição de Categoria </h2> : <h2>Criação de Categoria </h2>}
            </div>
            <div className="row">
                {id ? <FormCategoryUpdate id={id}/> : <FormCategoryRegister />}
            </div>
        </div>
    )   
}
export default CategoryCreate;