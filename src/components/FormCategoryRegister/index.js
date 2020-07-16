import React, { useEffect, useState } from 'react';

const FormCategoryRegister = (props) =>{
    const [categories, setCategories] = useState(null);
    const [name, setName] = useState(null);
    const [parent, setParent] = useState(null);
    
    useEffect(() =>{
        fetch('http://localhost:8000/api/categories/')
        .then(res => res.json())
        .then(data => setCategories(data))

    }, []);

    const createCategory = (e) =>{
        e.preventDefault();

        fetch('http://localhost:8000/api/categories/', {
            method: 'POST',
            body: JSON.stringify({
                name: name,
                parent_id: parent
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then( window.location.href = '/b2-blue/categorias');
    }
    return(
        <div className="container">
            <div className="row">
                <form className="form" onSubmit={createCategory}>
                    <input type="text" placeholder="Nome da Categoria" className="form-control" onChange={e => setName(e.target.value)}/>
                    { 
                        categories &&
                            <select className="form-control" onChange={e => setParent(e.target.value)}>
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
export default FormCategoryRegister;