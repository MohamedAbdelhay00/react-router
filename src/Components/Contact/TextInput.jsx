import React, { useState } from 'react';
import './Contact.css';

export default function TextInput({ type = 'text', label }) {
  const [value, setValue] = useState('');

  function handleChange(e) {
    setValue(e.target.value);
  }

  // Generate a unique id for the input
  const inputId = `input-${Math.random().toString(36).substring(2)}`;

  return (
    <div className="input-container w-100">
      <input type={type} id={inputId} value={value} onChange={handleChange} />
      <label className={value ? 'filled' : ''} htmlFor={inputId}>
        {label}
      </label>
    </div>
  );
}
