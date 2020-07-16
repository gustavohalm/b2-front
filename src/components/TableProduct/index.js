import React from 'react';

const TableProduct = (props) =>{
    const {products} = props;

    return (
        <table className="table">
            <thead>
                <tr>
                   <th>#</th>
                   <th>Nome</th>
                   <th>Descrição</th>
                   <th>Categoria</th>
                   <th>Preço</th>
                   <th>Ação</th>
                </tr>
            </thead>
            <tbody>
                {products.map(product => 
                    (<tr key={product.id}>
                        <td>{product.id}</td>
                        <td>{product.name}</td>
                        <td>{product.description}</td>
                        <td>{product.category.name}</td>
                        <td>{product.price}</td>
                        <td><a href={"editar/"+product.id} className="alert alert-warning">Editar</a></td>
                    </tr>)
                )}
            </tbody>
        </table>
    )
}
export default TableProduct;