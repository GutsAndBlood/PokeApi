import styles from '@/styles/Header.module.css'
import Link from 'next/link'

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <Link href='/'>
                    <a>PokeApi</a>
                </Link>
            </div>    

            <nav>
                <ul>
                    <li>
                        <Link href='/abilities'>
                            <a>Abilities</a>
                        </Link>
                    </li>
                    <li>
                        <Link href='/abilities'>
                            <a>Abilities</a>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
