import { useState } from "react";
import { Input } from "./tools";

const Links = () => {
  return (
    <div className='links'>
      <div>
        <Input
          label='Website'
          type='text'
          id='website-url'
          placeholder='https://www.johndoe.com'
          comment='recommended'
        />
        <Input
          label='Text'
          type='text'
          id='website-text'
          placeholder='johndoe.com'
          comment='optional'
        />
      </div>
      <div>
        <Input
          label='LinkedIn'
          type='text'
          id='linkedIn-url'
          placeholder='https://www.linkedin.com/'
          comment='recommended'
        />
        <Input
          label='Text'
          type='text'
          id='linkedin-text'
          placeholder='john-doe'
          comment='optional'
        />
      </div>
      <div>
        <Input
          label='GitHub'
          type='text'
          id='github-url'
          placeholder='https://www.github.com/john-doe'
          comment='recommended'
        />
        <Input
          label='Text'
          type='text'
          id='github-text'
          placeholder='john-doe'
          comment='optional'
        />
      </div>
    </div>
  );
};

export { Links };
