import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/home.module.scss'

export default function Home() {
  return (
         
    <h1 className={styles.title}> Olá <span> Dev </span> </h1>
  )
}
