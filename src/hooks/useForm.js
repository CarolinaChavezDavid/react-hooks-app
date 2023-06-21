import { useState } from "react";

export const useForm = (initialForm = {}) => {

    const [formState, setformState] = useState({initialForm});

    const onInputChange = ({target}) => {
        const { name, value } = target;
        setformState({
            ...formState,
            [name]: value
        })
    }

    const onResetForm = () => {
        setformState(initialForm)
    }
  
    return {
        ...formState,
        onResetForm,
        formState,
        onInputChange
    }
}

/**     username: 'carolina1',
        email: 'scchavezd@gmail.com',
        password: '12d32' */
