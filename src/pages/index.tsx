import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'


interface Post {
  id: string,
  title: string
}

export default function Home() {
  // variável de estado
  const [posts, setPosts] = useState<Post[]>()

  // executado quando o componente é carregado apenas porque não tem variável sendo controlada []
  useEffect( () => {
    fetch('http://localhost:3333/posts')
    
  }, [])

  return (
    <h1 > Olá <span> Dev </span> </h1>
  )
}
