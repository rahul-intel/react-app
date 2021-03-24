import React from 'react';
import Form from "./Form";

const formData = { 
    firstname: '',
    lastname: '',
    email: '',
    password: ''
    };
function Register(props) {
    return (
        <div className="content-inner">
            <div className="row justify-content-center align-items-center">
                <div className="col-6">
                    <div className="card">
                        <div className="card-body">
                            <h3 className="card-title login-heading">Register</h3>
                            <Form isSignUp={true} formData={formData} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;