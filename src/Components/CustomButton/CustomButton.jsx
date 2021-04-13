import React from 'react';
import { Link } from 'react-router-dom';

const CustomButton = ({classType, label, disabled, buttonType, url}) => (
    <div className="form-group">
        {buttonType === 'submit' ? 
        <button disabled={disabled} type="submit" className={`w-100 btn btn-${classType}`}>{label}</button> 
        : <Link to={url} className={`w-100 btn btn-${classType}`} >{label}</Link>
        }
    </div>
) ;

export default  CustomButton;