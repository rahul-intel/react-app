import { useHistory } from "react-router-dom";

function LoginButton() {
  let history = useHistory();

  function handleClick() {
    history.push("/login");
  }

  return (
    <button type="button" className="btn btn-success mr-3" onClick={handleClick}>Sign In</button>
  );
}

export default LoginButton;