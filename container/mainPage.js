import Head from 'next/head'
import styles from '@/styles/MainPage.module.css'
import Header from '@/components/header'
import Carrousel from '@/components/carrousel'
import {useRouter} from 'next/router'
import PokemonList from './pokemonList'
import Footer from '@/components/footer'
import Dice from '@/components/dice'

export default function MainPage({title, description, children, keywords}) {

    const router = useRouter()

    return (
        <div className={styles.mainPageDiv}>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
                <meta name="keywords" content={keywords} />
            </Head>

            <Header/>

            {router.pathname === '/' && <Carrousel  className={styles.mainPageHeader} />}

            <div className={styles.container}>
                {children}
            </div>

            <PokemonList/>

            <Dice />

            <p className={styles.mainPagePara}>Re-roll</p>

            <Footer/>
           
        </div>
    )
}

MainPage.defaultProps = {
    title:'Pokédex',
    description: 'Catch them all and know about their Abilities',
    keywords: 'pokemon, Pokédex, pokeapi'
}