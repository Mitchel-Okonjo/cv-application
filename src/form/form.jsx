import { useState } from "react";
import "./form.css";
import { PersonalDetails } from "../pages/personal";
import { Links } from "../pages/links";
import { Skills } from "../pages/skills";
import { PageButton } from "../pages/tools";

const Form = ({
  heading,
  activeIndex,
  onClick,
  handleInputChange,
  personalValues,
  links,
  handleLinksChange,
  skillsAndLang,
  setSkillsAndLang,
  skillsIndex,
  setSkillsIndex,
}) => {
  return (
    <section className='form-section'>
      <div className='form-header'>
        <h1 className='form-heading'>{heading}</h1>
        <div className='page-btns'>
          <PageButton
            type='button'
            className='page-navigation'
            pageNav='Back'
            flag='b'
            onClick={() => onClick(activeIndex - 1)}
            visibility={activeIndex > 0 ? "flex" : "none"}
          />
          <PageButton
            type='button'
            className='page-navigation'
            pageNav='Next'
            flag='n'
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
        {activeIndex === 2 && (
          <Skills
            skillsAndLang={skillsAndLang}
            setSkillsAndLang={setSkillsAndLang}
            skillsIndex={skillsIndex}
            setSkillsIndex={setSkillsIndex}
          />
        )}
        {/* {activeIndex === 3 && <WorkExperience />}
        {activeIndex === 4 && <Projects />}
        {activeIndex === 5 && <Education />}
        {activeIndex === 6 && <Certifications />} */}
      </form>
    </section>
  );
};

export default Form;
