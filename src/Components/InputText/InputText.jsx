import React from 'react';

const InputText =({name, label, type, required, value, onChange}) => (
    <div className={`form-group`}>
        <label>{label}</label>
        <input required={required} name={name} value={value}
            onChange={onChange} type={type} placeholder={`Enter ${label}`} 
            className="form-control" />
    </div>
);

export default InputText;
