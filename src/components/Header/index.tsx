import Link from 'next/link'
import style from './styles.module.scss'

export function Header() {
    return (
        <header className={style.container}>
            <div className={style.content}>
                <img src="/logo.svg" alt="Dev News"/>
                <nav>
                    <Link href="/"> 
                        <a>  Home </a>
                    </Link>
                    <Link href="/posts"> 
                        <a> Posts </a>
                    </Link>
                </nav>
            </div>
        </header>
    )
}