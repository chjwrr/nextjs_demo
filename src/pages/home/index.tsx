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
import { useEffect } from 'react'
import { GetServerSideProps } from 'next'
import { GetStaticProps } from 'next'

const Home:NextPage = (props:any)=> {
  console.log('props==',props);
  
  const router = useRouter()

  useEffect(()=>{

    function handleRouteChangeComplete(url:string, { shallow }:any){

    }

    router.events.on('routeChangeComplete',handleRouteChangeComplete)

    return ()=>{
      router.events.off('routeChangeComplete', handleRouteChangeComplete)

    }
  },[])


  function onJumpToAbout(){
    console.log('router==',router);
    router.push({
      pathname:'/',
      query:{params:110}
    })
    // router.push('/about')
    // router.replace('/about')   替换路由
    // router.back()
    // router.reload()
  }
  return (
    <Layout>
      <MainView>
        <CustomFont>Welcome to <a href="https://nextjs.org">Next.js!</a></CustomFont>
        <Button type='primary' onClick={onJumpToAbout}>跳转到About页面</Button>
        <CustomBold>自定义字体</CustomBold>

        <Button type='primary' onClick={()=>{
          router.push('home/123?params1=abc')
        }}>跳转到Home页面</Button>

        <Image
        src={ImageCommon.card_king_bg}
        placeholder="blur"
        quality={75}
        width={480}
        height={676}
        />
      <Image
        src={'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi2.hdslb.com%2Fbfs%2Farchive%2F3c90eb673244c95ff63bf3255230d1070a56a8e5.jpg&refer=http%3A%2F%2Fi2.hdslb.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1664009576&t=b38110e63b3bf95d420e63b9c9c81f53'}
        width={800}
        height={312}
        placeholder="blur"
        blurDataURL='data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=='
      />
        </MainView>
    </Layout>
  )
}



/**
  用户请求数据的情况
  1. 不请求，所有的数据都是写死在网页上
  2. 打开页面请求一次（接口每次返回的数据都不同，但跟用户无关）
  3. 打开页面请求一次，点击页面的按钮可以刷新、加载数据（切换不同标签获取不同数据）
  4. 打开页面请求一次，而后每1分钟刷新数据
 */

//  如果您想获取经常更改的数据并让页面更新以显示最新数据，这将非常有用。
// export const getServerSideProps: GetServerSideProps = async (context:any) => {
//   // ...
//   return {
//     props:{
//       abc:1234
//     }
//   }
// }


/**
  内容与用户无关，可以提前静态化

  在开发环境，每次请求都会运行一次 getStaticProps，这是为了方便我们修改代码重新运行。
  而在生产环境，getStaticProps 只在 build 时运行，这样可以提供一份 HTML 给所有用户下载。
*/
export const getStaticProps: GetStaticProps = async (context:any) => {
  console.log('context==',context);
  
  return {
    props:{
      abc:'123'
    },
    // revalidate: 10 // 10 seconds 
  }
}


/*
return {
  props:{

  }
}
return {
  notFound: true,
}
return {
  redirect: {
    destination: '/',
    permanent: false,
  },
}
*/
export default Home
