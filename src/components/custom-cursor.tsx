import { useEffect, useState } from 'react'

import { useTheme } from 'next-themes'
import AnimationCursor from 'react-animated-cursor'

import { useCSR } from '@/hooks/use-csr'

const colors = {
  light: '48, 49, 52',
  dark: '233, 236, 239',
}

export function CustomCursor() {
  const [cursorColor, setCursorColor] = useState('')
  const { resolvedTheme } = useTheme()
  const isClientEnv = useCSR()

  useEffect(() => {
    setCursorColor(
      resolvedTheme === 'light'
        ? colors.light
        : resolvedTheme === 'dark'
        ? colors.dark
        : ''
    )
  }, [resolvedTheme])

  if (!isClientEnv) {
    return
  }

  return (
    <AnimationCursor
      innerStyle={{
        backgroundColor: 'transparent',
      }}
      color={cursorColor}
      outerSize={40}
      outerScale={2}
      trailingSpeed={9}
      clickables={['a', 'button']}
    />
  )
}
