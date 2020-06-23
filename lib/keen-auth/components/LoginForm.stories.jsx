import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import LoginForm from "./LoginForm";

export default {
  title: "Login Form",
};

export const containerBounded = () => (
  <div className="container">
    <div className="row">
      <div className="col">
        <LoginForm></LoginForm>
      </div>
    </div>
  </div>
);

export const defaultForm = () => <LoginForm></LoginForm>;
