import React from 'react';

const Input = ({ label, type, placeholder }) => {
  return (
    <div className="input-group">
      <label>{label}</label>
      <input 
        type={type} 
        placeholder={placeholder} 
        className="input-field"
      />
    </div>
  );
};

export default Input;
