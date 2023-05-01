import React from "react"
import { useLobby } from "@huddle01/react/hooks"
import { useRouter } from "next/router"
const index = () => {
  const router = useRouter()
  const { roomId } = router.query
  const { joinLobby } = useLobby()
  return <div className='h-screen'>index</div>
}

export default index
