import Link from 'next/link'
export function Header() {
    return (
        <header>
            <div>
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