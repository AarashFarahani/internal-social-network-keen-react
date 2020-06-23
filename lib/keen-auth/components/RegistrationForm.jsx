import React from "react";
import { useSelector } from "react-redux";
import "./LoginForm.scss";
import UserAction from "../store/userAction";

class RegistrationForm extends React.Component {
  constructor(props) {
    super(props);

    const dispatch = useDispatch();
    this.state = { username: "", password: "", firstName: "", lastName: "" };

    this.updateState = (e) => {
      const { name, value } = e.target;
      this.setState({ [name]: value });
    };
  }

  render() {
    return (
      <form className="form-signin">
        <img
          class="mb-4"
          src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg"
          alt=""
          width="72"
          height="72"
        ></img>

        <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>

        <div class="form-group">
          <label for="email">Email address:</label>
          <input type="email" class="form-control" id="email" />
        </div>

        <div class="form-group">
          <label for="pwd">Password:</label>
          <input type="password" class="form-control" id="pwd" />
        </div>

        <div class="form-group">
          <label for="firstName">First Name:</label>
          <input type="text" class="form-control" id="firstName" />
        </div>

        <div class="form-group">
          <label for="lastName">Last Name:</label>
          <input
            type="text"
            class="form-control"
            id="lastName"
            value={this.state.lastName}
            onChange={this.updateInputValue}
          />
        </div>

        <button
          type="button"
          onClick={() => dispatch(UserAction.register(this.state))}
          class="btn btn-lg btn-primary btn-block"
        >
          Login
        </button>
      </form>
    );
  }

  // updateInputValue = (evt) => {
  //   this.setState({
  //     inputValue: evt.target.value,
  //   });
  // };
}

export default RegistrationForm;
