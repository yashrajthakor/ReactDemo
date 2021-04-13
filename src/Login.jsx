import React, { useState } from 'react';
import InputText from './Components/InputText/InputText';
import InputTextPassword from './Components/InputText/InputTextPassword';
import CustomButton from './Components/CustomButton/CustomButton';
import { useDispatch } from 'react-redux';
import { signIn } from './Redux/Auth/Actions';
 const Login = () => {
     const [email,setEmail] = useState('');
     const [password,setPassword]=useState('');
     const dispatch = useDispatch();

     const handleSubmit=(event)=>{
         event.preventDefault();
        dispatch(signIn(email,password));
        alert(`Successfully login`);
        return;

     };

    return (
        <>
         <div className="col-md-4 col-10 mx-auto">                    
                    <div id="main" >
                    <div className="row no-gutters">
                        <div className="col-md-7">
                            <div className="login-form-main-box d-flex align-items-center justify-content-center">
                                <div className="login-form-box">                                    
                                    <div className="text-center mt-3 mb-3">
                                        <h3>Sign In</h3>
                                    </div>
                                    <div className="login-form">
                                        <form action="#" onSubmit={handleSubmit}>
                                            <div className="row">
                                                <div className="col-12">
                                                    <InputText
                                                        name='email'
                                                        label='Email'
                                                        type='text'
                                                        value={email}
                                                        onChange={e => {setEmail(e.target.value);}} 
                                                    />
                                                </div>
                                                <div className="col-12">
                                                    <InputTextPassword 
                                                        name= 'password'    
                                                        label='Password'
                                                        value={password}
                                                        onChange={e => {setPassword(e.target.value);}}                         
                                                    />
                                                </div>                                               
                                                <div className="col-sm-6">                                                                                                   
                                                    <CustomButton buttonType="submit" classType="primary" label="Sign in" />                                                
                                                </div>                                                
                                            </div>
                                        </form>
                                    </div>                                    
                                 </div>
                            </div>
                        </div>
                    </div>
                </div>
             </div>
        </>
    )
};

export default Login;