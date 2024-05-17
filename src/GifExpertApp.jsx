import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

// let id = 0;

export const GifExpertApp = () => {

    const [ categories, setCategories ] = useState([ 'One Punch' ]);

    // const handleAddCategory = (newCategory) => {
    //     setCategories([newCategory, ...categories]);
    // };

    const onAddCategory = (newCategory) => {

        // const nextCategory = [
        //     ...categories.slice(0, id++),
        //     newCategory,
        //     ...categories.slice(id++)
        // ];
        // setCategories(
        //     nextCategory
        // );

        if ( categories.includes(newCategory) ) return;

        setCategories([ newCategory, ...categories ]);

    }

    return (
        <>

            {/* Titulo  */}
            <h1>GifExpertApp</h1>

            {/* Input */}
            <AddCategory onNewCategory={ onAddCategory } />

            {/* Listado de Gif's */}
            {/* <button onClick={ onAddCategory } >Agregar</button> */}
                { 
                    // categories.map( category => {
                    //     return <li key={category} >{category}</li>
                    // })

                    categories.map( ( category ) => (
                    
                        <GifGrid key={ category } category={ category }/>

                    ))
                }
                {/* Gif Item */}

        </>
    );
};
