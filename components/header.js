import styles from '@/styles/Header.module.css'
import Link from 'next/link'
import Router from 'next/router'
import Image from 'next/image'

export default function Header() {

    
    const profile = () => {
        Router.reload(window.open('https://gutsandblood.github.io/react-portfolio/', "_blank"))
    }

    const reload = () => {
        Router.reload(window.location.pathname)
    }

    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <Image
                src='/logo.png'
                alt='pokemon logo'
                width={128}
                height={72}
                onClick={reload}/>
            </div>    

            <nav>
                <ul>
                    <li>
                        <a href='/' onClick={profile}>About Me</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
