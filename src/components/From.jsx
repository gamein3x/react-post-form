import { useState } from "react";

const formDataInitial = {
    author: '',
    title: '',
    body: '',
    public: true
}

function From() {
    const handleChange = {event} => {
        const target = event.target;
        const tagType = target.type;
        const name = target.name;
        const value = target.value;
        const checked = target.checked;

        const keyToUpdate = name;
        const valueToUpdate = (tagType === 'checkbox' ? checked : value);

        const newFormData = {
            ...formData,
            [keyToUpdate]: valueToUpdate
        };

        setFormData(newFormData);
    };

    return (
        <div>Fullform</div>
    )
}