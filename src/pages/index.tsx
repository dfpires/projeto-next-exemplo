import {GetServerSideProps} from 'next'

interface Post {
  id: string;
  title: string;
}

interface Posts {
  posts: Post[]
}

export default function Home() {
  return (
    <div>
    
    </div>
  )
}
// função será executada antes do componente ser carregado
export const getServerSideProps: GetServerSideProps<> = async () => {

}