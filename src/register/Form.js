import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import  axios from "axios";


function Form({isSignUp, formData, handleCancelClick}) {
    const [form, setForm] = useState(formData);
    const [formErrors, setFormErrors] = useState({});
    const history = useHistory();
    useEffect(()=> {
        if(!isSignUp){
            setForm(formData);
        }
      },[isSignUp,formData]);
    const validateForm = ()=> {
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
        if(form.email === '' && isSignUp){
            errorObj.email = 'Email is required';
            validFlag = false;
        }else if(isSignUp && form.email && !(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(form.email))){
            errorObj.email = 'Email is invalid';
            validFlag = false;
        }
        if(form.password === '' && isSignUp){
            errorObj.password ='Password is required';
            validFlag = false;
        }
        setFormErrors(errorObj);
        return validFlag;
    }
    const submitHandler = (event)=> {
        event.preventDefault();
        if(validateForm()){
            axios.post("http://3.7.46.64:7003/user/signup",form)
            .then(function (response) {
                history.push("/login");
            })
            .catch(function (error) {
                console.log(error);
            });
        }
    }
    const submitHandlerEdit = (event)=> {
        event.preventDefault();
        if(validateForm()){
            const userData = JSON.parse(localStorage.getItem('user'));
            axios.post("http://3.7.46.64:7003/user/edit_user",{'access_token': userData?.data?.access_token ,...form})
            .then(function (response) {
                window.location.reload();
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
        isSignUp ?
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
                    <input type="text" name="email" className="form-control" placeholder="Email" aria-label="Email" onChange={handleChange} /> 
                    <span className="text-danger">{formErrors?.email}</span>
                </div>
                <div className="col">
                    <input type="password" name="password" className="form-control" placeholder="Password" aria-label="Password" onChange={handleChange} />
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
        : 
        <form action="" autoComplete="off" onSubmit={submitHandlerEdit}>
            <div className="row mb-5">
                <div className="col">
                    <label className="form-label">First Name</label>
                    <input type="text" name="firstname" value={form.firstname} className="form-control" placeholder="Enter First Name" aria-label="First Name" onChange={handleChange}/>
                    <span className="text-danger">{formErrors?.firstname}</span>
                </div>
                <div className="col">
                    <label className="form-label">Last Name</label>
                    <input type="text" name="lastname" value={form.lastname} className="form-control" placeholder="Enter Last Name" aria-label="Last Name" onChange={handleChange}/>
                    <span className="text-danger">{formErrors?.lastname}</span>
                </div>
            </div>
            <div className="row mb-5">
                <div className="col">
                    <label className="form-label">Email/Username</label>
                    <input type="text" name="email" readOnly value={form.email} className="form-control" />
                </div>
                <div className="col">
                    <label className="form-label">Description</label>
                    <input type="text" name="description"  value={ form.description } onChange={handleChange} className="form-control" placeholder="Enter Description"/>
                </div>
            </div>
            <div className="row mb-5">
                <div className="col">
                    <label className="form-label">GitHub Profile URL</label>
                    <input type="text" name="github" value={form.github} onChange={handleChange} className="form-control" placeholder="Enter GitHub Profile URL" />
                </div>
                <div className="col">
                    <label className="form-label">Stackoverflow Profile URL</label>
                    <input type="text" name="stackoverflow"  onChange={handleChange} value={form.stackoverflow} className="form-control" placeholder="Enter Stackoverflow Profile URL" />
                </div>
            </div>
            <div className="row mb-5">
                <div className="col">
                    <label className="form-label">Profile Picture URL</label>
                    {/* <input className="form-control" onChange={handleFileChange} type="file" name="photo" id="formFile" accept=".jpeg, .png, .jpg" /> */}
                    <input type="text" name="photo"  onChange={handleChange} value={form.photo} className="form-control" placeholder="Enter Profile Picture URL" />
                </div>
                <div className="col">
                    {form.photo && <img src={form.photo} alt="Avatar" width="100" />}
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <button type="submit" id="updateBtn" className="btn btn-primary mr-3">Update</button>
                    <button type="button" id="cencelBtn" className="btn btn-light" onClick={handleCancelClick}>Cancel</button>
                </div>
            </div>
        </form>
    );
}

export default Form;