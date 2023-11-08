import { useState } from "react";
import { Input, NormalButton, PageButton } from "./tools";
import { mdiDelete, mdiDeleteEmpty, mdiPlus } from "@mdi/js";

const Projects = ({ project, projectIndex, setProject, setProjectIndex }) => {
  const addWork = () => {
    setProject((prevProject) => {
      setProjectIndex(project.length);
      return [
        ...prevProject,
        {
          ["id"]: prevProject.length,
          ["name"]: "",
          ["techStack"]: "",
          ["bullets"]: ["", "", ""],
          ["sourceCode"]: ["", ""],
          ["demo"]: ["", ""],
        },
      ];
    });
  };

  const removeWork = (id) => {
    setProject((prevProject) => {
      setProjectIndex(projectIndex - 1);
      const updatedPrevProject = prevProject.filter((v) => v.id != id);
      return updatedPrevProject.map((item, index) => {
        return {
          ...item,
          ["id"]: index,
        };
      });
    });
  };

  const addBullet = (id) => {
    setProject((prevProject) => {
      const updatedPrevProject = prevProject.map((item) => {
        return item.id === id
          ? { ...item, ["bullets"]: [...item["bullets"], ""] }
          : item;
      });
      return updatedPrevProject;
    });
  };

  const removeBullet = (id, index) => {
    setProject((prevProject) => {
      const updatedPrevProject = prevProject.map((item) => {
        return item.id === id
          ? {
              ...item,
              ["bullets"]: item["bullets"].filter((v, i) => i != index),
            }
          : item;
      });
      return updatedPrevProject;
    });
  };

  const handleInputChange = (id, field, value) => {
    setProject((prevProject) => {
      const updatedPrevProject = prevProject.map((item) => {
        return item.id === id ? { ...item, [field]: value } : item;
      });
      return updatedPrevProject;
    });
  };

  const handleArrayInputChange = (id, field, value, index) => {
    setProject((prevProject) => {
      const updatedPrevProject = prevProject.map((item) => {
        return item.id === id
          ? {
              ...item,
              [field]: item[field].map((v, i) => (i === index ? value : v)),
            }
          : item;
      });
      return updatedPrevProject;
    });
  };

  const currentPage = project[projectIndex]["id"];
  return (
    <div className='project'>
      <div className='sub-header'>
        <h2>
          {`Project ${projectIndex + 1} `}
          <NormalButton
            className='delete-page'
            tyep='button'
            visibility={projectIndex === 0 ? "none" : "flex"}
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
            visibility={projectIndex === project.length - 1 ? "flex" : "none"}
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
            visibility={projectIndex > 0 ? "flex" : "none"}
            onClick={() => setProjectIndex(projectIndex - 1)}
            color='#f1f5f9'
            bgColor='#022c22'
          />
          <PageButton
            className='page-navigation'
            type='button'
            flag='n'
            size={1}
            visibility={projectIndex < project.length - 1 ? "flex" : "none"}
            onClick={() => setProjectIndex(projectIndex + 1)}
            color='#f1f5f9'
            bgColor='#022c22'
          />
        </div>
      </div>

      <div className='project-body body'>
        <div>
          <Input
            label='Name'
            type='text'
            id='project-name'
            placeholder='Google'
            className='project-input'
            value={project[projectIndex]["name"]}
            handleChange={(e) =>
              handleInputChange(projectIndex, "name", e.target.value)
            }
          />
          <Input
            label='Tech Stack'
            type='text'
            id='project-techStack'
            placeholder='Software Engineer'
            className='project-input'
            value={project[projectIndex]["techStack"]}
            handleChange={(e) =>
              handleInputChange(projectIndex, "techStack", e.target.value)
            }
          />
        </div>
        <div>
          <Input
            label='Source code'
            type='text'
            id='project-sourceCode'
            placeholder='Google'
            className='project-input'
            value={project[projectIndex]["sourceCode"][0]}
            handleChange={(e) =>
              handleArrayInputChange(
                projectIndex,
                "sourceCode",
                e.target.value,
                0
              )
            }
          />

          <Input
            label='Text'
            type='text'
            id='project-sourceCode-text'
            comment='for source code'
            placeholder='Google'
            className='project-input'
            value={project[projectIndex]["sourceCode"][1]}
            handleChange={(e) =>
              handleArrayInputChange(
                projectIndex,
                "sourceCode",
                e.target.value,
                1
              )
            }
          />
        </div>
        <div>
          <Input
            label='Demo'
            type='text'
            id='project-demo'
            placeholder='Google'
            className='project-input'
            value={project[projectIndex]["demo"][0]}
            handleChange={(e) =>
              handleArrayInputChange(projectIndex, "demo", e.target.value, 0)
            }
          />

          <Input
            label='Text'
            type='text'
            id='project-demo-text'
            comment='for demo'
            placeholder='Google'
            className='project-input'
            value={project[projectIndex]["demo"][1]}
            handleChange={(e) =>
              handleArrayInputChange(projectIndex, "demo", e.target.value, 1)
            }
          />
        </div>

        <div className='bullets'>
          {project[currentPage]["bullets"].map((value, index) => {
            return (
              <div className='item' key={index}>
                <Input
                  label={index + 1}
                  type='text'
                  placeholder='Bullet point'
                  className={`${currentPage}-input`}
                  value={value}
                  handleChange={(e) =>
                    handleArrayInputChange(
                      currentPage,
                      "bullets",
                      e.target.value,
                      index
                    )
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
export { Projects };
