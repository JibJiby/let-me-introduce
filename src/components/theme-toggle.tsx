import { useCallback } from 'react'

import { useTheme } from 'next-themes'

import { ThemeSwitch } from '@/components/theme-switch'

import { useCSR } from '@/hooks/use-csr'

export function ThemeToggle() {
  const isClientEnv = useCSR()
  const { setTheme, resolvedTheme } = useTheme()

  const toggle = useCallback(() => {
    if (resolvedTheme === 'light') {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }, [resolvedTheme, setTheme])

  if (!isClientEnv) {
    return null
  }

  return (
    <div className="absolute select-none top-4 right-4 cursor-none">
      <ThemeSwitch
        className="cursor-none"
        checked={resolvedTheme !== 'system' && resolvedTheme === 'dark'}
        onClick={toggle}
      />
    </div>
  )
}
