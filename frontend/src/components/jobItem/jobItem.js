import React from 'react'
import { Link } from "react-router-dom"

export const JobItem = ({ item }) => {
  return (
    <Link to={`/job/${item.id}`} className="block bg-slate-900 border rounded-lg border-gray-700 p-5 shadow delay-100 duration-200" rel="noreferrer">
      <div className="flex flex-row justify-between items-center gap-5">
        <p className='w-10/12 break-all'>
          <span className="text-gray-500 font-semibold">{item.title}/</span>
          <span className="flex gap-3 justify-start">
            <a href={item.company_url} className="text-gray-300 font-semibold">{item.company}</a> - 
            <p className="text-sm text-green">{item.type}</p>
          </span>
        </p>
        <span className='flex justify-between items-center gap-2 text-xs w-2/12'>
          <span className="text-gray-500 font-semibold">{item.location}</span>
        </span>
      </div>
    </Link>
  )
}