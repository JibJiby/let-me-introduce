import { useLayoutEffect, useState } from 'react'

import AnimationCursor from 'react-animated-cursor'

export function CustomCursor() {
  const [isRendered, setIsRendered] = useState(false)

  useLayoutEffect(() => {
    setIsRendered(true)
  }, [])

  if (!isRendered) {
    return
  }

  return (
    <AnimationCursor
      innerStyle={{
        backgroundColor: 'transparent',
      }}
      color="48, 49, 52"
      outerSize={40}
      outerScale={2}
      clickables={['a']}
    />
  )
}
