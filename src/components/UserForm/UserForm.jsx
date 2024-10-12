import React from "react";
import "./UserForm.css";

const UserForm = ({ form , updateForm }) => {
  return (
    <div className="fade-in">
      <label htmlFor="nome">Nome:</label>
      <input
        type="text"
        name="nome"
        className="form-control my-3"
        id="nome"
        placeholder="Digite seu nome"
        value={form.name || ""}
        onChange={(e) => updateForm('name' , e.target.value)}
        required
      />
      <br />
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        name="email"
        className="form-control my-3"
        id="email"
        placeholder="Digite seu e-mail"
        value={form.email || ""}
        onChange={(e) => updateForm('email' , e.target.value)}
        required
      />
    </div>
  );
};

export default UserForm;
