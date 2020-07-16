import React, { useEffect, useState } from 'react';

const FormProductUpdate = (props) =>{
    const {id } = props;
    const [categories, setCategories] = useState(null);
    const [name, setName] = useState(null);
    const [description, setDescription] = useState(null);
    const [price, setPrice] = useState(null);
    const [categoryId, setCategoryId] = useState(null);
    
    useEffect(() =>{
        fetch('http://localhost:8000/api/categories/')
        .then(res => res.json())
        .then(data => setCategories(data));

        fetch('http://localhost:8000/api/products/'+parseInt(id)+'/')
        .then(res => res.json())
        .then(product => {
            setName(product.name)
            setCategoryId(product.category.id)
            setDescription(product.description)
            setPrice(product.price)
        });
        
    }, []);

    const createProduct = (e) =>{
        e.preventDefault();

        fetch('http://localhost:8000/api/products/'+id+'/', {
            method: 'PUT',
            body: JSON.stringify({
                name: name,
                category_id: categoryId,
                description: description,
                price: price
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then( window.location.href = '/b2-blue/produtos');
    }
    return(
        <div className="container">
            <div className="row">
                <form className="form" onSubmit={createProduct}>
                    <input type="text" placeholder="Nome do Produto" className="form-control" onChange={e => setName(e.target.value)} value={name}/>
                    <input type="text" placeholder="Descrição do Produto" className="form-control" onChange={e => setDescription(e.target.value)} value={description}/>
                    <input type="number" placeholder="Preço" step="0.01" className="form-control" onChange={e => setPrice(e.target.value)} value={price}/>
                    {categories &&
                        <select className="form-control" onChange={e => setCategoryId(e.target.value)}>
                            <option value={null}>---</option>
                            {   
                                categories.map(category =>
                                    <option selected={category.id === categoryId} value={category.id}>{category.name}</option>
                                )
                            }
                        </select>
                    }
                    <input type="submit" className="btn btn-info" value="Criar"/>
                </form>
            </div>
        </div>    
    )
}
export default FormProductUpdate;