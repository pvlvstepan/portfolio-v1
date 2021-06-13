import { useEffect, useState } from "react";

const useForm = (validateInput) => {
    const [values, setValues] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [touched, setTouched] = useState({
        name: false,
        email: false,
        message: false,
    });

    const [errors, setErrors] = useState({});

    const handleChange = e => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        });
        setTouched({
            ...touched,
            [name]: true
        });
    };

    useEffect(() => {
        setErrors(validateInput(values));
    }, [values, validateInput]);

    const handleSubmit = e => {
        setTouched({
            name: true,
            email: true,
            message: true,
        });

        e.preventDefault();

        setErrors(validateInput(values));
    };

    return { handleChange, handleSubmit, values, errors, touched };
};

export default useForm;