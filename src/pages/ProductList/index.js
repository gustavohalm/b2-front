import React, { useEffect } from 'react';
import {useState } from  'react';
import TableProduct from '../../components/TableProduct';

const ProductList = () =>{
    const [products, setProducts] = useState();
    const [page, setPage] = useState(0)
    useEffect(()=>{
        fetch('http://localhost:8000/api/products/')
        .then(res => res.json())
        .then(data => setProducts(data.results))
    },[])

    return(
        <div className="container">
            <div className="row">
                <div className="col-md-9">
                    <h2>Listagem de Produtos</h2>
                </div> 
                <div className="col-md-3">
                    <a href="criar">Criar Novo Produto</a>
                </div>        
            </div>
            {
                products &&
                    <div className='row'>
                        <TableProduct products={products} />
                    </div>
            }
        </div>
    )

}
export default ProductList;