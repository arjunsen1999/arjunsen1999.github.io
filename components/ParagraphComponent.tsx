import React from 'react'

export default function ParagraphComponent({para} : {para : string}) {
  return (
    <div className='w-full'>
      <div className="w-full ">
          <p className="text-secondary dancing-script text-lg">{`<p>`}</p>
        </div>

        <div className="w-full pl-4 sm:pl-10 ">
          <p className="text-white text-sm sm:text-lg">{para}</p>
        </div>

        <div className="w-full ">
          <p className="text-secondary dancing-script text-lg">{`</p>`}</p>
        </div>
    </div>
  )
}
