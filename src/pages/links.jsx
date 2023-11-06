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
          placeholder='https://www.johndoe.com'
          comment='recommended'
          value={links["websiteUrl"]}
          handleChange={(e) => handleChange("websiteUrl", e.target.value)}
        />
        <Input
          label='Text'
          type='text'
          id='website-text'
          placeholder='johndoe.com'
          comment='optional'
          value={links["websiteText"]}
          handleChange={(e) => handleChange("websiteText", e.target.value)}
        />
      </div>
      <div>
        <Input
          label='LinkedIn'
          type='text'
          id='linkedIn-url'
          placeholder='https://www.linkedin.com/'
          comment='recommended'
          value={links["linkedinUrl"]}
          handleChange={(e) => handleChange("linkedinUrl", e.target.value)}
        />
        <Input
          label='Text'
          type='text'
          id='linkedin-text'
          placeholder='john-doe'
          comment='optional'
          value={links["linkedinText"]}
          handleChange={(e) => handleChange("linkedinText", e.target.value)}
        />
      </div>
      <div>
        <Input
          label='GitHub'
          type='text'
          id='github-url'
          placeholder='https://www.github.com/john-doe'
          comment='recommended'
          value={links["githubUrl"]}
          handleChange={(e) => handleChange("githubUrl", e.target.value)}
        />
        <Input
          label='Text'
          type='text'
          id='github-text'
          placeholder='john-doe'
          comment='optional'
          value={links["githubText"]}
          handleChange={(e) => handleChange("githubText", e.target.value)}
        />
      </div>
    </div>
  );
};

export { Links };
