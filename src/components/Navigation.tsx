import { useRouter } from 'next/router'
import { NavHeader } from '@components/NavHeader'
import React from 'react'
import { HTMLMotionProps } from 'framer-motion'
import ThemeSwitcher from '@components/ThemeSwitcher'

export const Navigation = (props: HTMLMotionProps<'nav'>) => {
  const router = useRouter()

  return (
    // @ts-ignore
    <NavHeader
      alignment="right"
      navItems={[
        {
          title: 'About',
          onClick: (e) => {
            e.preventDefault()
            router.push('/', undefined, { shallow: true })
          },
          active: router.pathname === '/',
        },
        {
          title: 'Services',
          onClick: (e) => {
            e.preventDefault()
            router.push('/services', undefined, { shallow: true })
          },
          active: router.pathname.startsWith('/services'),
        },
        {
          title: 'Blog',
          onClick: (e) => {
            e.preventDefault()
            router.push('/posts', undefined, { shallow: true })
          },
          active: router.pathname.startsWith('/posts'),
        },
      ]}
      addOn={<ThemeSwitcher />}
      {...props}
    />
  )
}
