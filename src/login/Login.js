import { useState } from "react";
import { useHistory } from "react-router-dom";
import  axios from "axios";

function Login() {
    let history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [unameerror, setUnameerror] = useState('');
    const [passworderror, setPassworderror] = useState('');
    const [loginError, setLoginError] = useState('');
    const signIn = async () => {
        axios.post("http://3.7.46.64:7003/user/login",{
            "email": email,
            "password": password
        }).then(function (response) {
          setLoginError('');
          localStorage.setItem('user',JSON.stringify(response.data));
          history.push("/");
        })
        .catch(function (error) {
          //console.log(error);
          setLoginError('Your Email ID or Password was Incorrect');
        });
    }
    const submitHandler = (event)=> {
        event.preventDefault();
        setUnameerror('');
        setPassworderror('');
        if(email && password){
            signIn();
        }else{
            if(email === ''){
                setUnameerror('Email is required.');
            }
            if(password === ''){
                setPassworderror('Password is required.');
            }
        }
    }
    const handleRegisterClick = (e)=> {
        history.push("/register");
    }
    return (
        <div className="content-inner">
            <div className="row justify-content-center align-items-center">
                <div className="col-4">
                    <div className="card">
                        <div className="card-body">
                            <h3 className="card-title login-heading">Login</h3>
                            <form action="" autoComplete="off" onSubmit={submitHandler}>
                                <div className="form-group">
                                    <input type="text" className="form-control" name="email" autoComplete="off" placeholder="Email" onChange={(event) => {setEmail(event.target.value);}} />
                                    <span className="text-danger">{unameerror}</span>
                                </div>
                                <div className="form-group">
                                    <input type="password" className="form-control" name="password" autoComplete="off" placeholder="Password" onChange={(event) => {setPassword(event.target.value);}} />
                                    <span className="text-danger">{passworderror}</span>
                                </div>
                                <div className="form-group">
                                    { loginError && <div className="alert alert-danger" role="alert">{loginError}</div>}
                                </div>
                                <div className="row">
                                    <div className="col-3">
                                        <button type="submit" id="sendlogin" className="btn btn-primary mr-3">login</button>
                                    </div>
                                    <div className="col-9 text-right pt-2">
                                        <span className="align-bottom">Don't have account? <button className="btn btn-link p-0 mb-1" onClick={handleRegisterClick} id="signup">Sign up here</button></span>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;