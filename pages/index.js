import Head from 'next/head'
import Link from 'next/link'
import Header from './components/header'
import Content from './components/content'
import Styles from '../styles/Home.module.css'


export default function Home() {
  let title = 'こんにちは'

  return (
    <Content>
      <Head>
        <title>{ title }</title>
      </Head>
      <Header title={ title }/>
{/*       <h1 className="site-title" style={{ color: `red`, backgroundColor: `#9f9` }}>{ title }</h1> */}
      <p>学ぶ。をちゃんと</p>
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
