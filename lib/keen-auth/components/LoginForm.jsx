import React from "react";
import { useSelector } from "react-redux";
import "./LoginForm.scss";

const LoginForm = () => {
  //   const day = useSelector((state) => state.day);
  //   const comments = day.comment.split("<br/>").map((comment, i) => (
  //     <div key={i} className="row">
  //       {comment}
  //     </div>
  //   ));

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

      <button type="button" class="btn btn-lg btn-primary btn-block">
        Submit
      </button>
    </form>
  );
};

export default LoginForm;
