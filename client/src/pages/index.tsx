import React, { useEffect, useState } from "react"
import Head from "next/head"
import { useHuddle01 } from "@huddle01/react"
import Modal from "../components/Modal/createParty"
import SideCard from "../components/sideCard"
import { useAccount } from "wagmi"
import dynamic from "next/dynamic"
import { data } from "../Constants/data"
import JoinParty from "@/components/Modal/JoinParty"
const index = () => {
  const { initialize, isInitialized } = useHuddle01()
  const { address, isConnected } = useAccount()
  const [roomId, setRoomId] = useState<string>("")
  useEffect(() => {
    initialize(process.env.PROJECT_ID as string)
  }, [])
  return (
    <>
      {/* header here */}
      <Head>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crossOrigin=''
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap'
          rel='stylesheet'
        ></link>
      </Head>
      {isConnected ? (
        <div className='flex flex-col h-screen p-4 md:flex-row md:p-10 md:justify-around md:space-x-4'>
          {/* WatchParty list for various Activities */}
          <div className='w-full md:w-1/4 h-full md:h-4/5 p-4 scrollbar-hide overflow-scroll flex flex-col scrollbar-hider items-center'>
            <label className='btn m-4 w-full' htmlFor='modal-2'>
              Join Party
            </label>
            <JoinParty roomId={roomId} />
            {data.map((item, index) => {
              return (
                <SideCard
                  key={index}
                  name={item.name}
                  desc={item.description}
                  img={item.image}
                />
              )
            })}
          </div>

          {/* Center Post Container */}
          <div className='w-full md:w-2/4 h-2/3  bg-red-100 '>
            {/* {[1, 2, 3, 4, 5].map((item, index) => {
              return <Post />
            })} */}
            <div>{isInitialized ? "Hello World!" : "Please initialize"}</div>;
          </div>

          {/* Comments Section */}
          <div className='w-full md:w-1/4 bg-white '>x</div>

          {/* Modal here */}
          <Modal setRoomId={setRoomId} />
        </div>
      ) : (
        <>
          <div className='h-screen flex w-full justify-center items-center text-3xl'>
            Connect Wallet to enter the exciting world
          </div>
        </>
      )}
    </>
  )
}

export default dynamic(() => Promise.resolve(index), { ssr: false })
