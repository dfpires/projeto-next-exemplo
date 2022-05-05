import {GetServerSideProps} from 'next'
import Posts from './posts'
import SEO from '../components/SEO'

export default function Home() {
  return (
    <>
      <SEO title="Dev News" excludeTitleSuffix/>

      <h1> Posts - teste</h1>
      
    </>
  )
}