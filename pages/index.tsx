import dynamic from 'next/dynamic'
import React, { useEffect } from 'react'
import { Title } from '../components/styles'

const Viewer = dynamic(() => import('../components/Viewer'))
const Layout = dynamic(() => import('../components/Layout'))

export default () => {
  useEffect(() => {
    if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator)
      navigator.serviceWorker
        .register('/sw.js')
        .then((_) => {
          console.log('service worker registration successful')
        })
        .catch((err) => {
          console.warn('service worker registration failed', err.message)
        })
  }, [])

  return (
    <Layout>
      <Title>PDF Side By Side</Title>
      <Viewer />
    </Layout>
  )
}
