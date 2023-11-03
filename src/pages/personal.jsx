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
          field='fullName'
          placeholder='John Doe'
          comment='required'
          value={inputValues["fullName"]}
          handleChange={handleChange}
        />
        <Input
          label='Job Title'
          type='text'
          id='jobTitle'
          field='jobTitle'
          placeholder='Software Engineer'
          comment='recommended'
          value={inputValues["jobTitle"]}
          handleChange={handleChange}
        />
      </div>
      <div>
        <Input
          label='Email'
          type='email'
          id='email'
          field='email'
          placeholder='someone@example.com'
          comment='recommended'
          value={inputValues["email"]}
          handleChange={handleChange}
        />
        <Input
          label='Phone'
          type='tel'
          id='phone'
          field='phone'
          placeholder='07050751423'
          comment='optional'
          value={inputValues["phone"]}
          handleChange={handleChange}
        />
      </div>
      <Input
        label='Adress'
        type='text'
        id='address'
        field='address'
        placeholder='Long Island, New York'
        comment='optional'
        value={inputValues["address"]}
        handleChange={handleChange}
      />
      <TextArea
        label='Summary'
        id='summary'
        field='summary'
        rows={10}
        cols={50}
        placeholder='something'
        comment='recommended'
        value={inputValues["summary"]}
        handleChange={handleChange}
      />
    </div>
  );
};

export { PersonalDetails };
