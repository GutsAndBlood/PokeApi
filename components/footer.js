import style from '@/styles/Footer.module.css'

import Image from 'next/image'

export default function Footer() {

    return(
        <footer className={style.footerMain}>
            <Image src="/logoWhite.png"
            alt="logo"
            height = {100}
            width={100}  />
            <p>Living, Learning &amp; Leveling up one day at a time.</p>
        </footer>
    )
}
