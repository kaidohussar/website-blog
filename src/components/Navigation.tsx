import { useRouter } from 'next/router'
import { Switch, useTheme } from 'kaidohussar-ui'
import { NavHeader } from '@components/NavHeader'

export default function Navigation() {
  const router = useRouter()
  const { setTheme, theme } = useTheme()

  return (
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
          title: 'Blog',
          onClick: (e) => {
            e.preventDefault()
            router.push('/posts', undefined, { shallow: true })
          },
          active: router.pathname.startsWith('/posts'),
        },
      ]}
      addOn={
        <Switch
          labels={{ left: 'Lights ON', right: 'Lights OFF' }}
          isToggled={theme === 'dark'}
          handleToggle={() => {
            setTheme(theme === 'light' ? 'dark' : 'light')
          }}
        />
      }
    />
  )
}
