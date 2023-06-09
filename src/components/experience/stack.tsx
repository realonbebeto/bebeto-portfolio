import React from 'react'

type Props = {
    skills: Array<string>;
}


const Skill = ({skills}: Props) : JSX.Element | any => {
  return skills ? skills.map((item, index) => (
    <span key={index} className="border text-sm font-thin m-1 py-1 px-3 rounded-md border-[#1DA1F2] text-[#1DA1F2]">{item}</span>
  )): null
}

export default Skill