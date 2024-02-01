import React from "react";

import { useState } from "react";
import TextInput from "./TextInput";

import "./Contact.css";

export default function Contact() {
  return (
    <div className="contact text-center">
      <h2>CONATCT SECTION</h2>
      <div className="d-flex justify-content-center align-items-center">
        <div className="hr"></div>
        <i className="fa-solid fa-star m-3"></i>
        <div className="hr"></div>
      </div>
      <div className="d-flex justify-content-center">
        <form className="d-flex flex-column align-items-center py-5 w-100">
          <TextInput label="First name" />
          <TextInput label="Age" />
          <TextInput label="Email" />
          <TextInput label="Password" />
          <div className="d-flex w-100">
            <button className="text-light border-0 py-2 px-3 rounded">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
