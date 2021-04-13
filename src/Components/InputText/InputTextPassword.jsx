import React from 'react';

const InputTextPassword = ({name, label, required, value, onChange}) => (
    <div className={`form-group`}>
        <label>{label}</label>
        <div className="password-box">
            <input required={required} name={name} value={value}
            onChange={onChange} type="password" placeholder={`Enter ${label}`} 
            className="form-control" />
            <a href="#" className="show-password"><i className="icon-eye"></i></a>
        </div>
    </div>
);

export default InputTextPassword;
