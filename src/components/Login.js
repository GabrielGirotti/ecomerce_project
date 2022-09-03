import React from 'react';
import axios from 'axios';
import { useNavigate, Navigate } from 'react-router-dom';
import swAlert from '@sweetalert/with-react';
import logo from '../img/logo-color.png';

function Login() {

    const history = useNavigate('');

    const submitHandler = (e) => {
        e.preventDefault();
        
        const username = e.target.username.value;
        const password = e.target.password.value;

        


        if (username === '' || password === '') {
            swAlert("", "Please enter the data requested", "error");

            
            return;
        }

        if(username !== 'mor_2314' || password !== '83r5^_') {
            swAlert("Use these data to Log in:", "username: mor_2314 / password: 83r5^_ ", "error");  

            return;
        }

        

        
        axios
        .post("https://fakestoreapi.com/auth/login", { username, password})
        .then(res => {
            swAlert("", "", "success"); 
            const token = res.data.token;
            console.log(token)

            localStorage.setItem('token', token);
            history('/home')
            
        })        
    }

    let token = localStorage.getItem('token');
  
  
  return (
    
    <>
        { token && <Navigate to='/home' /> }

        


        <div className='row'>
            <div className='col-6 offset-3'>
                <form onSubmit={submitHandler}>
                    <img src={logo} className='login__logo' alt='logo'/>
                    <br />
                    <h4>Sign in</h4>
                    <br />
                    <label className='form-label d-block mt-1'>

                        <input className='form-control' type='text' name='username' placeholder='Username:'/>
                        <br />
                    </label>
                    <br />
                    <label className='form-label d-block'>

                        <input className='form-control' type='password' name='password' placeholder='Password:'/>
                        <br />
                    </label>
                    <br />
                    <button type='submit' className='btn btn-success'>Log in</button>
                </form>
            </div>
        </div>
        
    </>    
    

  )
}

export default Login