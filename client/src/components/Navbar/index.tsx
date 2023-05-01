import React from "react"
import { ConnectButton } from "@rainbow-me/rainbowkit"
import Image from "next/image"
import { useAccount } from "wagmi"
import Link from "next/link"
import logo from "../../assets/Images/logo.png"
import dynamic from "next/dynamic"

const index = () => {
  const { address, isConnected } = useAccount()
  return (
    <nav className='sticky text-white top-0 z-10 bg-gray-600 backdrop-filter backdrop-blur-lg bg-opacity-20 border-b-[0.2px] border-gray-200'>
      <div className='max-w-5xl mx-auto px-4'>
        <div className='flex items-center justify-center md:justify-between h-20'>
          <Link href={"/"}>
            <Image src={logo} alt='logo here' width={150} height={150} />
          </Link>
          <div className=' hidden md:flex w-1/2 items-center justify-end p-2'>
            {isConnected ? (
              <div className='flex w-full justify-around'>
                <ConnectButton />
                <Link href={`/profile/${address}`}>
                  <div className='avatar hover:scale-110'>
                    <div className='w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2'>
                      <div className='w-full h-full bg-white rounded-full'></div>
                    </div>
                  </div>
                </Link>
              </div>
            ) : (
              <ConnectButton />
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default dynamic(() => Promise.resolve(index), { ssr: false })
