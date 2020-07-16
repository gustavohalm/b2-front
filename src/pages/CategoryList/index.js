import React, { useEffect } from 'react';
import {useState } from  'react';
import TableCategory from '../../components/TableCategory';

const CategoryList = () =>{
    const [categories, setCategories] = useState();

    useEffect(()=>{
        fetch('http://localhost:8000/api/categories/')
        .then(res => res.json())
        .then(data => setCategories(data))
    },[])

    return(
        <div className="container">
            <div className="row">
                <div className="col-md-9">
                    <h2>Listagem de Categorias</h2>
                </div> 
                <div className="col-md-3">
                    <a href="criar">Criar Nova Categoria</a>
                </div>        
            </div>
            {
                categories &&
                    <div className='row'>
                        <TableCategory categories={categories} />
                    </div>
            }
        </div>
    )

}
export default CategoryList;