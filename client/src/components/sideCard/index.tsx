import React, { FC } from "react"
import Image, { StaticImageData } from "next/image"

interface Props {
  name: string
  img: StaticImageData
  desc: string
}

const index: FC<Props> = ({ name, desc, img }) => {
  return (
    <div className='w-full flex flex-col bg-black p-4 m-2 space-y-2 rounded-xl  '>
      <Image src={img} alt='esports' className='w-full h-1/2 mt-1 rounded-xl' />
      <p className='text-sm text-white font-mono font-extrabold'>{name}</p>
      <label htmlFor='modal-1' className='btn btn-active btn-primary mt-4 mb-2'>
        Create Watch Party
      </label>
    </div>
  )
}

export default index
