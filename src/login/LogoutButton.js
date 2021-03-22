import { useHistory } from "react-router-dom";
import  axios from "axios";

function LogoutButton() {
  let history = useHistory();
  const userData = JSON.parse(localStorage.getItem('user'));
  function handleClick() {
    axios.post("http://3.7.46.64:7003/user/logout",{
            "access_token": userData?.data?.access_token
        }).then(function (response) {
          localStorage.removeItem('user');
          history.push("/");
        })
        .catch(function (error) {
          console.log(error);
        });
  }

  return (
    <div className="user-block">
      <h5 className="font-weight-light pt-1">Welcome </h5> <h5 className="text-capitalize font-weight-bold ml-2 pt-1">{userData?.data?.firstname}</h5>
      <button type="button" className="btn btn-danger ml-3" onClick={handleClick}>Sign Out</button>
    </div>
  );
}

export default LogoutButton;