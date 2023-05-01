import React, { useState, FC } from "react"
import axios from "axios"
import { AiFillCopy } from "react-icons/ai"
interface Props {
  setRoomId: React.Dispatch<React.SetStateAction<string>>
}
const index: FC<Props> = ({ setRoomId }) => {
  const [id, setId] = useState<string>("")
  const getRoomId = async () => {
    const info = await axios.get("/api/create-room")
    const RoomID = info.data.data.roomId
    setRoomId(RoomID)
    setId(RoomID)
    console.log(RoomID)
  }

  return (
    <>
      <input type='checkbox' id='modal-1' className='modal-toggle' />
      <div className='modal'>
        <div className='modal-box relative'>
          <label
            htmlFor='modal-1'
            className='btn btn-sm btn-circle absolute right-2 top-2'
          >
            ✕
          </label>
          {id === "" ? (
            <>
              <h3 className='text-lg font-bold'>
                Create a Watch Party for this Activity
              </h3>
              <div>
                <button className='btn' onClick={() => getRoomId()}>
                  Create room
                </button>
              </div>
            </>
          ) : (
            <>
              <h3 className='text-lg font-bold'>
                Share With Your Friends to Watch Together
              </h3>
              <div
                className='hover:scale-105 cursor-pointer w-1/4 hover:font-bold'
                onClick={() => navigator.clipboard.writeText(id)}
              >
                <p className='flex space-x-2 items-center'>
                  {id}
                  <AiFillCopy />
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  )
}

export default index
