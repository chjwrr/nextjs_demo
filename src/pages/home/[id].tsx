import { Button } from 'antd'
import Head from 'next/head'
import Image from 'next/image'
import type { NextPage } from 'next'
import Layout from '../../components/Layout'
import {
  MainView,
  CustomFont,
  CustomBold
} from '../../styles/homeStyles'
import ImageCommon from '../../../public/images/ImageCommon'
import { useRouter } from 'next/router'
const Home:NextPage = ()=> {
  const router = useRouter()

  return (
    <Layout>
      <MainView>
        <CustomFont>{JSON.stringify(router.query)}</CustomFont>
      </MainView>
    </Layout>
  )
}
export default Home