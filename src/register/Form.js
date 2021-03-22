import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import  axios from "axios";

const initialState = { 
    firstname: '',
    lastname: '',
    email: '',
    password: ''
    };
function Form({isSignUp}) {
    const [form, setForm] = useState(initialState);
    const [formErrors, setFormErrors] = useState({});
    const history = useHistory();
    function validateForm() {
        let validFlag = true;
        const errorObj = {
            firstname: '',
            lastname: '',
            email: '',
            password: ''
        };
        if(form.firstname === ''){
            errorObj.firstname = 'First Name is required';
            validFlag = false;
        }
        if(form.lastname === ''){
            errorObj.lastname = 'Last Name is required';
            validFlag = false;
        }
        if(form.email === ''){
            errorObj.email = 'Email is required';
            validFlag = false;
        }else if(form.email && !(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(form.email))){
            errorObj.email = 'Email is invalid';
            validFlag = false;
        }
        if(form.password === ''){
            errorObj.password ='Password is required';
            validFlag = false;
        }
        setFormErrors(errorObj);
        return validFlag;
    }
    function submitHandler(event){
        event.preventDefault();
        if(validateForm()){
            axios.post("http://3.7.46.64:7003/user/signup",form)
            .then(function (response) {
                //localStorage.setItem('user',JSON.stringify(response.data));
                history.push("/login");
            })
            .catch(function (error) {
                console.log(error);
            });
        }
    }
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    }
    const handleLoginClick = (e) =>{
        history.push('/login');
    }
    return (
        <form action="" autoComplete="off" onSubmit={submitHandler}>
            <div className="row mb-5">
                <div className="col">
                    <input type="text" name="firstname" className="form-control" placeholder="First Name" aria-label="First Name" onChange={handleChange}/>
                    <span className="text-danger">{formErrors?.firstname}</span>
                </div>
                <div className="col">
                    <input type="text" name="lastname" className="form-control" placeholder="Last Name" aria-label="Last Name" onChange={handleChange}/>
                    <span className="text-danger">{formErrors?.lastname}</span>
                </div>
            </div>
            <div className="row mb-5">
                <div className="col">
                    <input type="text" name="email" className="form-control" placeholder="Email" aria-label="Email" onChange={handleChange}/>
                    <span className="text-danger">{formErrors?.email}</span>
                </div>
                <div className="col">
                    <input type="password" name="password" className="form-control" placeholder="Password" aria-label="Password" onChange={handleChange}/>
                    <span className="text-danger">{formErrors?.password}</span>
                </div>
            </div>
            <div className="row">
                <div className="col-3">
                    <button type="submit" id="sendlogin" className="btn btn-primary">Register</button>
                </div>
                <div className="col-9 text-right pt-2">
                    <span className="align-bottom">Already have an account? <button className="btn btn-link p-0 mb-1" onClick={handleLoginClick} id="siginBtn">Sign in here</button></span>
                </div>
            </div>
        </form>
    );
}

export default Form;