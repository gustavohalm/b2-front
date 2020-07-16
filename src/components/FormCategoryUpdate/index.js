import React, { useEffect, useState } from 'react';

const FormCategoryUpdate = (props) =>{
    const {id} = props;
    const [categories, setCategories] = useState(null);
    const [name, setName] = useState(null);
    const [parent, setParent] = useState(null);
    
    useEffect(() =>{
        fetch('http://localhost:8000/api/categories/')
        .then(res => res.json())
        .then(data => setCategories(data));
        
        fetch('http://localhost:8000/api/categories/'+parseInt(id)+'/')
        .then(res => res.json())
        .then(category => {
            setParent(category.parent.id)
            setName(category.name)
        });
        
    }, []);

    const updateCategory = (e) =>{
        e.preventDefault();

        fetch('http://localhost:8000/api/categories/'+id+'/', {
            method: 'PUT',
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
                <form className="form" onSubmit={updateCategory}>
                    <input type="text" placeholder="Nome da Categoria" className="form-control" onChange={e => setName(e.target.value)} value={name}/>
                    { 
                        categories &&
                            <select className="form-control" onChange={e => setParent(e.target.value)}>
                                <option value={null}>---</option>
                                {   
                                    categories.map(category =>
                                        <option value={category.id} selected={category.id === parent}>{category.name}</option>
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
export default FormCategoryUpdate;