function Login() {
    return (
        <div className="content-inner">
            <div className="row justify-content-center align-items-center">
                <div className="col-4">
                    <div className="card">
                        <div className="card-body">
                            <h3 className="card-title login-heading">Login</h3>
                            <form action="" autocomplete="off">
                                <div className="form-group">
                                    <input type="text" className="form-control" name="username" autocomplete="off" placeholder="Username" />
                                </div>
                                <div className="form-group">
                                    <input type="password" className="form-control" name="password" autocomplete="off" placeholder="Password" />
                                </div>
                                <button type="button" id="sendlogin" className="btn btn-primary">login</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;