import { useState } from "react";
import { Input, NormalButton, PageButton } from "./tools";
import { mdiDelete, mdiDeleteEmpty, mdiPlus } from "@mdi/js";

const Certifications = ({ certif, certifIndex, setCertif, setCertifIndex }) => {
  const addWork = () => {
    setCertif((prevCertif) => {
      setCertifIndex(certif.length);
      return [
        ...prevCertif,
        {
          ["id"]: prevCertif.length,
          ["name"]: "",
          ["date"]: "",
          ["bullets"]: ["", "", ""],
        },
      ];
    });
  };

  const removeWork = (id) => {
    setCertif((prevCertif) => {
      setCertifIndex(certifIndex - 1);
      const updatedPrevWork = prevCertif.filter((v) => v.id != id);
      return updatedPrevWork.map((item, index) => {
        return {
          ...item,
          ["id"]: index,
        };
      });
    });
  };

  const addBullet = (id) => {
    setCertif((prevCertif) => {
      const updatedPrevWork = prevCertif.map((item) => {
        return item.id === id
          ? { ...item, ["bullets"]: [...item["bullets"], ""] }
          : item;
      });
      return updatedPrevWork;
    });
  };

  const removeBullet = (id, index) => {
    setCertif((prevCertif) => {
      const updatedPrevWork = prevCertif.map((item) => {
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
    setCertif((prevCertif) => {
      const updatedPrevWork = prevCertif.map((item) => {
        return item.id === id ? { ...item, [field]: value } : item;
      });
      return updatedPrevWork;
    });
  };

  const handleBulletInputChange = (id, value, index) => {
    setCertif((prevCertif) => {
      const updatedPrevWork = prevCertif.map((item) => {
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

  const currentPage = certif[certifIndex]["id"];
  return (
    <div className='certif'>
      <div className='sub-header'>
        <h2>
          {`Cert ${certifIndex + 1} `}
          <NormalButton
            className='delete-page'
            tyep='button'
            visibility={certifIndex === 0 ? "none" : "flex"}
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
            visibility={certifIndex === certif.length - 1 ? "flex" : "none"}
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
            visibility={certifIndex > 0 ? "flex" : "none"}
            onClick={() => setCertifIndex(certifIndex - 1)}
            color='#f1f5f9'
            bgColor='#022c22'
          />
          <PageButton
            className='page-navigation'
            type='button'
            flag='n'
            size={1}
            visibility={certifIndex < certif.length - 1 ? "flex" : "none"}
            onClick={() => setCertifIndex(certifIndex + 1)}
            color='#f1f5f9'
            bgColor='#022c22'
          />
        </div>
      </div>

      <div className='certif-body body'>
        <div>
          <Input
            label='Name'
            type='text'
            id='certif-name'
            placeholder='Google'
            className='certif-input'
            value={certif[certifIndex]["name"]}
            handleChange={(e) =>
              handleInputChange(certifIndex, "name", e.target.value)
            }
          />
          <Input
            label='Date'
            type='text'
            id='certif-date'
            placeholder='Software Engineer'
            className='certif-input'
            value={certif[certifIndex]["date"]}
            handleChange={(e) =>
              handleInputChange(certifIndex, "date", e.target.value)
            }
          />
        </div>

        <div className='bullets'>
          {certif[currentPage]["bullets"].map((value, index) => {
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

export { Certifications };
