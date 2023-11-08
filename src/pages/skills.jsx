import { useState } from "react";
import { Input, NormalButton, PageButton } from "./tools.jsx";
import { mdiPlus } from "@mdi/js";

const Skills = ({
  skillsAndLang,
  setSkillsAndLang,
  skillsIndex,
  setSkillsIndex,
}) => {
  const addSkillOrLang = (id) => {
    setSkillsAndLang((prevSkillsAndLang) => {
      const updatedSkillsAndLang = prevSkillsAndLang.map((item) => {
        return item.id === id ? { ...item, [id]: [...item[id], ""] } : item;
      });

      return updatedSkillsAndLang;
    });
  };

  const removeSkillOrLang = (id, index) => {
    setSkillsAndLang((prevSkillsAndLang) => {
      const updatedSkillsAndLang = prevSkillsAndLang.map((item) => {
        return item.id === id
          ? { ...item, [id]: item[id].filter((v, i) => i != index) }
          : item;
      });
      return updatedSkillsAndLang;
    });
  };

  const handleInputChange = (id, value, index) => {
    setSkillsAndLang((prevSkillsAndLang) => {
      const updatedSkillsAndLang = prevSkillsAndLang.map((item) => {
        return item.id === id
          ? {
              ...item,
              [id]: item[id].map((v, i) => (i === index ? value : v)),
            }
          : item;
      });
      return updatedSkillsAndLang;
    });
  };

  const currentPage = skillsAndLang[skillsIndex]["id"];
  return (
    <div className='skills'>
      <div className='sub-header'>
        <h2>{currentPage}</h2>
        <div className='page-btns'>
          <PageButton
            className='page-navigation'
            type='button'
            flag='b'
            visibility={skillsIndex > 0 ? "flex" : "none"}
            onClick={() => setSkillsIndex(skillsIndex - 1)}
            color='#f1f5f9'
            bgColor='#022c22'
          />
          <PageButton
            className='page-navigation'
            type='button'
            flag='n'
            visibility={skillsIndex < 1 ? "flex" : "none"}
            onClick={() => setSkillsIndex(skillsIndex + 1)}
            color='#f1f5f9'
            bgColor='#022c22'
          />
        </div>
      </div>

      <SkillsSection
        skillsAndLang={skillsAndLang}
        handleInputChange={handleInputChange}
        currentPage={currentPage}
        removeSkillOrLang={removeSkillOrLang}
      />

      <NormalButton
        className='add-more'
        content='Add'
        type='button'
        visibility='flex'
        color='white'
        colorHover='white'
        bgColor='#022c22'
        bgColorHover='#022c22'
        onClick={() => addSkillOrLang(currentPage)}
        path={mdiPlus}
        pathHover={mdiPlus}
        title={`Add ${currentPage}`}
      />
    </div>
  );
};

const SkillsSection = ({
  skillsAndLang,
  handleInputChange,
  currentPage,
  removeSkillOrLang,
}) => {
  return (
    <div>
      {skillsAndLang.map((item) => {
        return item.id === currentPage
          ? item[currentPage].map((value, index) => (
              <div key={index}>
                <div className='item'>
                  <Input
                    label={index + 1}
                    type='text'
                    placeholder={currentPage}
                    className={`${currentPage}-input`}
                    value={value}
                    field={currentPage}
                    handleChange={(e) =>
                      handleInputChange(currentPage, e.target.value, index)
                    }
                  />
                  <NormalButton
                    className='remove'
                    content='remove'
                    type='button'
                    color='#f8fafc'
                    colorHover='#f8fafc'
                    bgColor='#b91c1c'
                    bgColorHover='#991b1b'
                    onClick={() => removeSkillOrLang(currentPage, index)}
                  />
                </div>
              </div>
            ))
          : null;
      })}
    </div>
  );
};

export { Skills };
