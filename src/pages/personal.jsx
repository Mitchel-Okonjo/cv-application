import { useState } from "react";
import { Input, TextArea } from "./tools";

const PersonalDetails = () => {
  return (
    <div className='personal'>
      <div>
        <Input
          label='Full Name'
          type='text'
          id='fullName'
          placeholder='John Doe'
          comment='required'
        />
        <Input
          label='Job Title'
          type='text'
          id='jobTitle'
          placeholder='Software Engineer'
          comment='recommended'
        />
      </div>
      <div>
        <Input
          label='Email'
          type='email'
          id='email'
          placeholder='someone@example.com'
          comment='recommended'
        />
        <Input
          label='Phone'
          type='tel'
          id='phone'
          placeholder='07050751423'
          comment='optional'
        />
      </div>
      <Input
        label='Adress'
        type='text'
        id='address'
        placeholder='Long Island, New York'
        comment='optional'
      />
      <TextArea
        label='Summary'
        id='summary'
        rows={10}
        cols={50}
        placeholder='something'
        comment='recommended'
      />
    </div>
  );
};

export { PersonalDetails };
