import { useState } from "react";
import { Input, NormalButton, PageButton } from "./tools";
import { mdiDelete, mdiDeleteEmpty, mdiPlus } from "@mdi/js";

const Education = ({
  education,
  educationIndex,
  setEducation,
  setEducationIndex,
}) => {
  const addWork = () => {
    setEducation((prevEducation) => {
      setEducationIndex(education.length);
      return [
        ...prevEducation,
        {
          ["id"]: prevEducation.length,
          ["name"]: "",
          ["degree"]: "",
          ["duration"]: "",
          ["address"]: "",
          ["bullets"]: ["", "", ""],
        },
      ];
    });
  };

  const removeWork = (id) => {
    setEducation((prevEducation) => {
      setEducationIndex(educationIndex - 1);
      const updatedPrevWork = prevEducation.filter((v) => v.id != id);
      return updatedPrevWork.map((item, index) => {
        return {
          ...item,
          ["id"]: index,
        };
      });
    });
  };

  const addBullet = (id) => {
    setEducation((prevEducation) => {
      const updatedPrevWork = prevEducation.map((item) => {
        return item.id === id
          ? { ...item, ["bullets"]: [...item["bullets"], ""] }
          : item;
      });
      return updatedPrevWork;
    });
  };

  const removeBullet = (id, index) => {
    setEducation((prevEducation) => {
      const updatedPrevWork = prevEducation.map((item) => {
        return item.id === id
          ? {
              ...item,
              ["bullets"]: item["bullets"].filter((v, i) => i != index),
            }
          : item;
      });
      return updatedPrevWork;
    });
  };

  const handleInputChange = (id, field, value) => {
    setEducation((prevEducation) => {
      const updatedPrevWork = prevEducation.map((item) => {
        return item.id === id ? { ...item, [field]: value } : item;
      });
      return updatedPrevWork;
    });
  };

  const handleBulletInputChange = (id, value, index) => {
    setEducation((prevEducation) => {
      const updatedPrevWork = prevEducation.map((item) => {
        return item.id === id
          ? {
              ...item,
              ["bullets"]: item["bullets"].map((v, i) =>
                i === index ? value : v
              ),
            }
          : item;
      });
      return updatedPrevWork;
    });
  };

  const currentPage = education[educationIndex]["id"];
  return (
    <div className='education'>
      <div className='sub-header'>
        <h2>
          {`Degree ${educationIndex + 1} `}
          <NormalButton
            className='delete-page'
            tyep='button'
            visibility={educationIndex === 0 ? "none" : "flex"}
            color='#b91c1c'
            colorHover='#991b1b'
            bgColor='inherit'
            bgColorHover='inherit'
            size={2}
            path={mdiDelete}
            pathHover={mdiDeleteEmpty}
            onClick={() => removeWork(currentPage, currentPage)}
          />
        </h2>
        <div className='page-btns'>
          <NormalButton
            id='add-page'
            type='button'
            content='Add'
            visibility={
              educationIndex === education.length - 1 ? "flex" : "none"
            }
            color='#f1f5f9'
            colorHover='#f1f5f9'
            bgColor='#0284c7'
            bgColorHover='#075985'
            path={mdiPlus}
            pathHover={mdiPlus}
            title='Add Job'
            size={1}
            onClick={() => addWork()}
          />
          <PageButton
            className='page-navigation'
            type='button'
            flag='b'
            size={1}
            visibility={educationIndex > 0 ? "flex" : "none"}
            onClick={() => setEducationIndex(educationIndex - 1)}
            color='#f1f5f9'
            bgColor='#022c22'
          />
          <PageButton
            className='page-navigation'
            type='button'
            flag='n'
            size={1}
            visibility={educationIndex < education.length - 1 ? "flex" : "none"}
            onClick={() => setEducationIndex(educationIndex + 1)}
            color='#f1f5f9'
            bgColor='#022c22'
          />
        </div>
      </div>

      <div className='education-body body'>
        <div>
          <Input
            label='Name'
            type='text'
            id='education-name'
            placeholder='Google'
            className='education-input'
            value={education[educationIndex]["name"]}
            handleChange={(e) =>
              handleInputChange(educationIndex, "name", e.target.value)
            }
          />
          <Input
            label='Degree'
            type='text'
            id='education-degree'
            placeholder='Software Engineer'
            className='education-input'
            value={education[educationIndex]["degree"]}
            handleChange={(e) =>
              handleInputChange(educationIndex, "degree", e.target.value)
            }
          />
        </div>
        <div>
          <Input
            label='Duration'
            type='text'
            id='education-duration'
            placeholder='Google'
            className='education-input'
            value={education[educationIndex]["duration"]}
            handleChange={(e) =>
              handleInputChange(educationIndex, "duration", e.target.value)
            }
          />

          <Input
            label='Address'
            type='text'
            id='education-address'
            comment='optional'
            placeholder='Google'
            className='education-input'
            value={education[educationIndex]["address"]}
            handleChange={(e) =>
              handleInputChange(educationIndex, "address", e.target.value)
            }
          />
        </div>

        <div className='bullets'>
          {education[currentPage]["bullets"].map((value, index) => {
            return (
              <div className='item' key={index}>
                <Input
                  label={index + 1}
                  type='text'
                  placeholder='Bullet point'
                  className={`${currentPage}-input`}
                  value={value}
                  handleChange={(e) =>
                    handleBulletInputChange(currentPage, e.target.value, index)
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
                  onClick={() => removeBullet(currentPage, index)}
                />
              </div>
            );
          })}
        </div>

        <NormalButton
          className='add-bullet'
          type='button'
          content='Add Bullet'
          color='white'
          colorHover='white'
          bgColor='#022c22'
          bgColorHover='#022c22'
          onClick={() => addBullet(currentPage)}
        />
      </div>
    </div>
  );
};

export { Education };
