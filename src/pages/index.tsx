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
    fetch('http://localhost:3333/posts') // vai no servidor
    .then(response => { // espera a resposta do servidor
      response.json() // transforma em json
      .then( data => { // espera transformar a resposta em json
        setPosts(data) // atualiza vetor de posts
      })
    })
  }, [])

  return (
    <h1 > Olá <span> Dev </span> </h1>
  )
}
