import Image from 'next/image'
import styles from '@/styles/Error.module.css'


export default function Error() {
    return (
        <div className={styles.error}>
            <Image src="/Error.svg"
            layout="fixed"
            alt="error logo"
            width={500}
            height={500} />
            <h1>page not found</h1>
        </div>
    )
}
