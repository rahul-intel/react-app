import { useHistory } from "react-router-dom";

function RegisterButton() {
  let history = useHistory();

  function handleClick() {
    history.push("/register");
  }

  return (
    <button type="button" className="btn btn-secondary mr-3" onClick={handleClick}>Sign Up</button>
  );
}

export default RegisterButton;