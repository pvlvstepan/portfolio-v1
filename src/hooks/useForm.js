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

    const encodeData = (data) => {
        return Object.keys(data)
            .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
            .join('&');
    };

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

        if (!errors.name && !errors.email && !errors.message) {
            fetch("/", {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: encodeData({ "form-name": "contact", ...values })
            })
                .then(() => alert("Success!"))
                .catch(error => alert(error));
        }

        e.preventDefault();
    };

    return { handleChange, handleSubmit, values, errors, touched };
};

export default useForm;