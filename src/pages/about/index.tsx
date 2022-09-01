import { Button } from 'antd'
import Head from 'next/head'
import Image from 'next/image'
import type { NextPage } from 'next'
import Layout from '../../components/Layout'

import ImageCommon from '../../../public/images/ImageCommon'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { GetStaticProps } from 'next'




const About:NextPage = ()=> {
  const route = useRouter()
  console.log('route.query==',route.query);
  
  return (
    <Layout>
      <Link href={'/'}>返回首页</Link>
    </Layout>
  )
}
export const getStaticProps: GetStaticProps = async (context:any) => {
  console.log('context==',context);
  
  return {
    props:{
      abc:'123'
    },
    // revalidate: 10 // 10 seconds 
  }
}

export default About