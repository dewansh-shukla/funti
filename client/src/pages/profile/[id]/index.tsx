import React, { useEffect } from "react"
import { useRouter } from "next/router"
import { useAccount } from "wagmi"
const index = () => {
  const router = useRouter()
  const { address, isConnected } = useAccount()
  const { id } = router.query

  useEffect(() => {
    if (!isConnected) {
      router.push("/")
    }
  })
  return <div className='h-screen'>{id}</div>
}

export default index
