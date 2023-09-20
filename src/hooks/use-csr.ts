import { useEffect, useState } from 'react'

export const useCSR = () => {
  const [isClientEnv, setIsClientEnv] = useState(false)

  useEffect(() => {
    setIsClientEnv(true)
  }, [])

  return isClientEnv
}
