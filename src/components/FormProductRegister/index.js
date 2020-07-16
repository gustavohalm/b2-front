import React, { useEffect, useState } from 'react';

const FormProductRegister = (props) =>{
    const [categories, setCategories] = useState(null);
    const [name, setName] = useState(null);
    const [description, setDescription] = useState(null);
    const [price, setPrice] = useState(null);
    const [category, setCategory] = useState(null);
    
    useEffect(() =>{
        fetch('http://localhost:8000/api/categories/')
        .then(res => res.json())
        .then(data => setCategories(data))

    }, []);

    const createProduct = (e) =>{
        e.preventDefault();

        fetch('http://localhost:8000/api/products/', {
            method: 'POST',
            body: JSON.stringify({
                name: name,
                category_id: category,
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
                    <input type="text" placeholder="Nome do Produto" className="form-control" onChange={e => setName(e.target.value)}/>
                    <input type="text" placeholder="Descrição do Produto" className="form-control" onChange={e => setDescription(e.target.value)}/>
                    <input type="number" placeholder="Preço" step="0.01" className="form-control" onChange={e => setPrice(e.target.value)} />
                    {categories &&
                        <select className="form-control" onChange={e => setCategory(e.target.value)}>
                            <option value={null}>---</option>
                            {   
                                categories.map(category =>
                                    <option value={category.id}>{category.name}</option>
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
export default FormProductRegister;