import { useState } from "react";

export const AddCategory = ( { onNewCategory } ) => {

    const [inputValue, setInputValue] = useState('');
    
    const onInputChange = ({target}) => {
        setInputValue( target.value )
    };

    const onSubmit = ( event ) => {
        event.preventDefault();
        const inputTrimValue = inputValue.trim();
        if ( inputTrimValue.length <= 1) return;
        onNewCategory(inputTrimValue); // Llama a la función onSubmitCategory y pasa el valor de inputValue
        setInputValue(''); // Reinicia el valor de inputValue después de enviar el formulario
    };

    return (

        <form onSubmit={ onSubmit }>
            <input 
                type="text"
                placeholder="Buscar gifs"
                value={ inputValue }
                onChange={ onInputChange }
            />
        </form>
    );
};