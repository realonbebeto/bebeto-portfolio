import React from 'react'
import { bigProjectsInfo } from '../../portfolio'
import BigProjectCard from '../../components/bigproject'


const BigProject = () => {
    const bigProjectSectionStyle = "flex flex-col my-24"
    const bigProjectHeaderStyle = "text-5xl font-[400] text-[#1DA1F2]"
    const bigProjectCardContainerStyle = "flex flex-wrap justify-between pt-5 gap-y-7"
  return (
    <section className={bigProjectSectionStyle} id="big-projects">
        <div className="w-auto">
          <h1 className={bigProjectHeaderStyle}>Big Projects</h1>
        </div>
        <div className={bigProjectCardContainerStyle}>
          {bigProjectsInfo.projects.map((blog, index) => (
            <BigProjectCard key={index} project={blog}/>
          ))}
        </div>
    </section>
  )
}

export default BigProject