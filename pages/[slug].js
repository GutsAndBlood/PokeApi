import Image from 'next/image'
import styles from '@/styles/Error.module.css'
import {useRouter} from 'next/router'


export default function Error() {

    const router = useRouter()

    return (
        <div className={styles.error}>
            <Image src="/Error.svg"
            layout="fixed"
            alt="error logo"
            width={500}
            height={500} />
            <br></br>
            <button onClick={() => router.push('/')}>Back to Home</button>
            <h1>page not found</h1>
        </div>
    )
}
