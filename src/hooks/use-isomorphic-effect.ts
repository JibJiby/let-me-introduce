import { useEffect, useLayoutEffect } from 'react'

export const useIsomorphicEffect = () => {
  const isClient = typeof window !== 'undefined'

  if (isClient) {
    return useLayoutEffect
  }

  return useEffect
}
