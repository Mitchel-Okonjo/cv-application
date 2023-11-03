import { useState } from "react";
import "./form.css";
import { PersonalDetails } from "../pages/personal";
import { Links } from "../pages/links";
import { Button } from "../pages/tools";

const Form = ({
  heading,
  activeIndex,
  onClick,
  handleInputChange,
  personalValues,
  links,
  handleLinksChange,
}) => {
  return (
    <section className='form-section'>
      <div className='form-header'>
        <h1 className='form-heading'>{heading}</h1>
        <div className='page-btns'>
          <Button
            type='button'
            className='page-navigation'
            pageNav='Back'
            onClick={() => onClick(activeIndex - 1)}
            visibility={activeIndex > 0 ? "flex" : "none"}
          />
          <Button
            type='button'
            className='page-navigation'
            pageNav='Next'
            onClick={() => onClick(activeIndex + 1)}
            visibility={activeIndex < 6 ? "flex" : "none"}
          />
        </div>
      </div>
      <form className='form'>
        {activeIndex === 0 && (
          <PersonalDetails
            handleInputChange={handleInputChange}
            inputValues={personalValues}
          />
        )}
        {activeIndex === 1 && (
          <Links links={links} handleLinksChange={handleLinksChange} />
        )}
        {/* {activeIndex === 2 && <Skills />}
        {activeIndex === 3 && <WorkExperience />}
        {activeIndex === 4 && <Projects />}
        {activeIndex === 5 && <Education />}
        {activeIndex === 6 && <Certifications />} */}
      </form>
    </section>
  );
};

export default Form;
