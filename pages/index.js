import Head from 'next/head'
import Link from 'next/link'
import useSWR from 'swr'
import Header from './components/header'
import Content from './components/content'
import Styles from '../styles/Home.module.css'


export default function Home() {
  let title = 'こんにちは'
/*   const {data, error} = useSWR('/api/message')
  if (error) return <div>読み込みに失敗しました。</div>
  if (!data) return <div>loading...</div> */

  return (
    <Content>
      <Head>
        <title>{ title }</title>
      </Head>
      <Header title={ title }/>
{/*       <h1 className="site-title" style={{ color: `red`, backgroundColor: `#9f9` }}>{ title }</h1> */}
{/*       <p>{data.message}</p> */}
      <p>こんにちは</p>
      <div>
        <Link href="/about"><a>リンク</a></Link>
{/*         <Link href="/about"><button>ボタン</button></Link> */}
      </div>
      <style jsx>{`
        h1 {
          color: white;
        }
      `}</style>
    </Content>
  )
}
