import { useState } from "react";
import { Input } from "./tools";

const Links = ({ links, handleLinksChange }) => {
  const handleChange = (field, value) => {
    handleLinksChange({
      ...links,
      [field]: value,
    });
  };
  return (
    <div className='links'>
      <div>
        <Input
          label='Website'
          type='text'
          id='website-url'
          field='websiteUrl'
          placeholder='https://www.johndoe.com'
          comment='recommended'
          value={links["websiteUrl"]}
          handleChange={handleChange}
        />
        <Input
          label='Text'
          type='text'
          id='website-text'
          field='websiteText'
          placeholder='johndoe.com'
          comment='optional'
          value={links["websiteText"]}
          handleChange={handleChange}
        />
      </div>
      <div>
        <Input
          label='LinkedIn'
          type='text'
          id='linkedIn-url'
          field='linkedinUrl'
          placeholder='https://www.linkedin.com/'
          comment='recommended'
          value={links["linkedinUrl"]}
          handleChange={handleChange}
        />
        <Input
          label='Text'
          type='text'
          id='linkedin-text'
          field='linkedinText'
          placeholder='john-doe'
          comment='optional'
          value={links["linkedinText"]}
          handleChange={handleChange}
        />
      </div>
      <div>
        <Input
          label='GitHub'
          type='text'
          id='github-url'
          field='githubUrl'
          placeholder='https://www.github.com/john-doe'
          comment='recommended'
          value={links["githubUrl"]}
          handleChange={handleChange}
        />
        <Input
          label='Text'
          type='text'
          id='github-text'
          field='githubText'
          placeholder='john-doe'
          comment='optional'
          value={links["githubText"]}
          handleChange={handleChange}
        />
      </div>
    </div>
  );
};

export { Links };
