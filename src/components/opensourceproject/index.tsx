import React from 'react'
import { ThemeContext } from '../../ThemeContext'
import { Link } from 'react-router-dom'
import { VscArrowRight } from 'react-icons/vsc'
import Element from './gitinfo'
import { ProjectType } from '../../types'

type Props = {
  key: number
  project: ProjectType
}

const OpenSourceProjectCard = ({ key, project }: Props) => {
  const { theme } = React.useContext(ThemeContext)

  // hover:shadow-md hover:shadow-white shadow-white shadow-sm rounded-lg  border border-gray-100
  console.log(project)
  return (
    <div
      key={key}
      className={
        theme === 'dark'
          ? 'w-[23%] bg-[#1F2938] border border-[#1F2938] hover:shadow-md hover:shadow-[#1F2938]  shadow-[#1F2938] shadow-sm rounded-lg px-6 py-2 cursor-pointer'
          : ''
      }
    >
      <Link to='#'>
        <div className='cursor-pointer my-3 flex gap-x-5 justify-between'>
          <p className='text-lg my-auto text-[#1DA1F2] font-normal '>{project.node.name}</p>
          <div
            className={
              theme === 'dark' ? 'text-xl text-[#1DA1F2] my-auto' : 'text-xl text-[#1DA1F2] my-auto'
            }
          >
            <VscArrowRight />
          </div>
        </div>
      </Link>
      <p
        className={
          theme === 'dark'
            ? 'pb-5 pt-2 text-base font-light text-white'
            : 'pb-5 pt-2 text-base font-light text-gray-500'
        }
      >
        {project.node.description}
      </p>
      <div
        className={
          theme === 'dark'
            ? 'flex justify-between text-white text-base font-thin pb-6'
            : 'flex justify-between text-gray-500 text-base font-thin pb-6'
        }
      >
        <div className='flex'>
          <Element element={project.node.primaryLanguage?.name} />
          <Element element={project.node.forkCount} />
          <Element element={project.node.stargazers?.totalCount} />
        </div>
        <Element element={project.node.diskUsage} />
      </div>
    </div>
  )
}

export default OpenSourceProjectCard
