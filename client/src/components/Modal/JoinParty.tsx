import React, { FC } from "react"
import { useRouter } from "next/router"
interface Props {
  roomId: string | null
}
const JoinParty: FC<Props> = ({ roomId }) => {
  const router = useRouter()
  return (
    <>
      <input type='checkbox' id='modal-2' className='modal-toggle' />
      <div className='modal'>
        <div className='modal-box relative'>
          <label
            htmlFor='modal-2'
            className='btn btn-sm btn-circle absolute right-2 top-2'
          >
            ✕
          </label>
          <h3 className='text-lg font-bold'>Enter the RoomID</h3>
          <div className='w-full flex flex-col h-full space-y-4'>
            <input
              type='text'
              placeholder='Type here'
              className='input input-bordered input-primary mt-2 mb-2  w-full max-w-xs'
            />
          </div>
          <button
            className='btn btn-primary mt-2 mb-2'
            onClick={() => router.push(`/${roomId}`)}
          >
            Join Party
          </button>
        </div>
      </div>
    </>
  )
}

export default JoinParty
