import React from 'react';
import Form from "./Form";

function Register(props) {
    return (
        <div className="content-inner">
            <div className="row justify-content-center align-items-center">
                <div className="col-6">
                    <div className="card">
                        <div className="card-body">
                            <h3 className="card-title login-heading">Register</h3>
                            <Form isSignUp={true} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;