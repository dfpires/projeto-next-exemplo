import {useRouter} from 'next/router'

export default function Post(){

    const router = useRouter()

    return (
        <>
            <h1> Post {router.query.id}</h1>
            <h2> Caminho da rota {router.asPath}</h2>
        </>
    )
}