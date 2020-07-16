import React, { useEffect } from 'react';
import FormProductRegister from '../../components/FormProductRegister';
import FormProductUpdate from '../../components/FormProductUpdate'

const ProductCreate = (props) =>{
    const {id} = props.match.params;
    
    return(
        <div className="container">
            <div className="row">
                {id ? <h2>Edição de Produto </h2> : <h2>Criação de Produto </h2>}
            </div>
            <div className="row">
                {id ? <FormProductUpdate id={id}/> : <FormProductRegister />}
            </div>
        </div>
    )   
}
export default ProductCreate;