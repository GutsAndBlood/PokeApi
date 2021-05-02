import style from '@/styles/Pokemon.module.css'
import { motion} from "framer-motion"

export default function Pokemon(props) {

    return (

        <motion.div 
            className={style.motionDiv}
            transition={{ duration: 0.1 }}
            whileHover={{ scale: 1.35}}>

            <div className={style.pokemonList}>
            <h2>{props.pokemonName}</h2>
            <img src={props.pokemonImage} alt={props.pokemonName}/>
            <p>{props.pokemonType}</p>
            <p>{props.pokemonType2}</p>
            {/* <h4>Main Ability</h4>
            <p>{props.ability}</p>
            <p>{props.ability2}</p> */}
            </div>
        </motion.div>
    )
}


