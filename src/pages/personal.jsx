import { useState } from "react";
import { Input, TextArea } from "./tools";

const PersonalDetails = ({ inputValues, handleInputChange }) => {
  const handleChange = (field, value) => {
    handleInputChange({
      ...inputValues,
      [field]: value,
    });
  };

  return (
    <div className='personal'>
      <div>
        <Input
          label='Full Name'
          type='text'
          id='fullName'
          placeholder='John Doe'
          comment='required'
          value={inputValues["fullName"]}
          handleChange={(e) => handleChange("fullName", e.target.value)}
        />
        <Input
          label='Job Title'
          type='text'
          id='jobTitle'
          placeholder='Software Engineer'
          comment='recommended'
          value={inputValues["jobTitle"]}
          handleChange={(e) => handleChange("jobTitle", e.target.value)}
        />
      </div>
      <div>
        <Input
          label='Email'
          type='email'
          id='email'
          placeholder='someone@example.com'
          comment='recommended'
          value={inputValues["email"]}
          handleChange={(e) => handleChange("email", e.target.value)}
        />
        <Input
          label='Phone'
          type='tel'
          id='phone'
          placeholder='07050751423'
          comment='optional'
          value={inputValues["phone"]}
          handleChange={(e) => handleChange("phone", e.target.value)}
        />
      </div>
      <Input
        label='Adress'
        type='text'
        id='address'
        placeholder='Long Island, New York'
        comment='optional'
        value={inputValues["address"]}
        handleChange={(e) => handleChange("address", e.target.value)}
      />
      <TextArea
        label='Summary'
        id='summary'
        rows={10}
        cols={50}
        placeholder='something'
        comment='recommended'
        value={inputValues["summary"]}
        handleChange={(e) => handleChange("summary", e.target.value)}
      />
    </div>
  );
};

export { PersonalDetails };
