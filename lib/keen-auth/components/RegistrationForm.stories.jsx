import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import RegistrationForm from "./RegistrationForm";

export default {
  title: "Registeration Form",
};

export const containerBounded = () => (
  <div className="container">
    <div className="row">
      <div className="col">
        <RegistrationForm></RegistrationForm>
      </div>
    </div>
  </div>
);

export const defaultForm = () => <RegistrationForm></RegistrationForm>;
