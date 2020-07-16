import React from 'react';

const TableCategory = (props) =>{
    const {categories} = props;

    return (
        <ul>
            {categories.map(category => 
                (<li>
                    <div>
                        <p> <a href={"editar/" +category.id}>{category.name}</a></p>
                    </div>
                </li>)
            )}
        </ul>
    )
}
export default TableCategory;