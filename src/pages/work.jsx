import { useState } from "react";
import { Input, NormalButton, PageButton } from "./tools";
import { mdiDelete, mdiDeleteEmpty, mdiPlus } from "@mdi/js";

const Work = ({ work, workIndex, setWork, setWorkIndex }) => {
  const addWork = () => {
    setWork((prevWork) => {
      setWorkIndex(work.length);
      return [
        ...prevWork,
        {
          ["id"]: prevWork.length,
          ["companyName"]: "",
          ["jobTitle"]: "",
          ["duration"]: "",
          ["address"]: "",
          ["bullets"]: ["", "", ""],
        },
      ];
    });
  };

  const removeWork = (id) => {
    setWork((prevWork) => {
      setWorkIndex(workIndex - 1);
      const updatedPrevWork = prevWork.filter((v) => v.id != id);
      return updatedPrevWork.map((item, index) => {
        return {
          ...item,
          ["id"]: index,
        };
      });
    });
  };

  const addBullet = (id) => {
    setWork((prevWork) => {
      const updatedPrevWork = prevWork.map((item) => {
        return item.id === id
          ? { ...item, ["bullets"]: [...item["bullets"], ""] }
          : item;
      });
      return updatedPrevWork;
    });
  };

  const removeBullet = (id, index) => {
    setWork((prevWork) => {
      const updatedPrevWork = prevWork.map((item) => {
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
    setWork((prevWork) => {
      const updatedPrevWork = prevWork.map((item) => {
        return item.id === id ? { ...item, [field]: value } : item;
      });
      return updatedPrevWork;
    });
  };

  const handleBulletInputChange = (id, value, index) => {
    setWork((prevWork) => {
      const updatedPrevWork = prevWork.map((item) => {
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

  const currentPage = work[workIndex]["id"];
  return (
    <div className='work'>
      <div className='sub-header'>
        <h2>
          {`Job ${workIndex + 1} `}
          <NormalButton
            className='delete-page'
            tyep='button'
            visibility={workIndex === 0 ? "none" : "flex"}
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
            visibility={workIndex === work.length - 1 ? "flex" : "none"}
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
            visibility={workIndex > 0 ? "flex" : "none"}
            onClick={() => setWorkIndex(workIndex - 1)}
            color='#f1f5f9'
            bgColor='#022c22'
          />
          <PageButton
            className='page-navigation'
            type='button'
            flag='n'
            size={1}
            visibility={workIndex < work.length - 1 ? "flex" : "none"}
            onClick={() => setWorkIndex(workIndex + 1)}
            color='#f1f5f9'
            bgColor='#022c22'
          />
        </div>
      </div>

      <div className='work-body'>
        <div>
          <Input
            label='Company Name'
            type='text'
            id='work-compnayName'
            placeholder='Google'
            className='work-input'
            value={work[workIndex]["companyName"]}
            handleChange={(e) =>
              handleInputChange(workIndex, "companyName", e.target.value)
            }
          />
          <Input
            label='Job Title'
            type='text'
            id='work-jobTitle'
            placeholder='Software Engineer'
            className='work-input'
            value={work[workIndex]["jobTitle"]}
            handleChange={(e) =>
              handleInputChange(workIndex, "jobTitle", e.target.value)
            }
          />
        </div>
        <div>
          <Input
            label='Duration'
            type='text'
            id='work-duration'
            placeholder='Google'
            className='work-input'
            value={work[workIndex]["duration"]}
            handleChange={(e) =>
              handleInputChange(workIndex, "duration", e.target.value)
            }
          />

          <Input
            label='Address'
            type='text'
            id='work-address'
            comment='optional'
            placeholder='Google'
            className='work-input'
            value={work[workIndex]["address"]}
            handleChange={(e) =>
              handleInputChange(workIndex, "address", e.target.value)
            }
          />
        </div>

        <div className='bullets'>
          {work[currentPage]["bullets"].map((value, index) => {
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

export { Work };
