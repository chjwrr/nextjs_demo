import React, { ReactElement, ReactNode } from 'react'
import Head from 'next/head'

const Layout = ({ children, title = '自定义标题' }:{
  children:React.ReactNode,
  title?:string
}) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" key={'asdf'}/>
    </Head>
    {children}
  </div>
)

export default Layout
