import style from '@/styles/Pokemon.module.css'
import { motion} from "framer-motion"
import React, { Component } from 'react'

class Pokemon extends Component {


    render(){

        return (

            <motion.div 
                className={style.motionDiv}
                transition={{ duration: 0.1 }}
                whileHover={{ scale: 1.35}}>
    
                <div className={style.pokemonList}
                data-text={ `Type: ${this.props.pokemonType} ${this.props.pokemonType2 ? ' &  ' + this.props.pokemonType2 + '\n' : '\n'}Abilities: ${this.props.ability} ${this.props.ability2 ? ' &  ' + this.props.ability2 + '\n': '\n'  }Moves: ${this.props.pokemonMove}${this.props.pokemonMove2 ? '  &  ' + this.props.pokemonMove2 + '\n': '\n'  }Stats: ${this.props.pokemonStatName} = ${this.props.pokemonStat}\n${this.props.pokemonStatName2} = ${this.props.pokemonStat2}\n${this.props.pokemonStatName3} = ${this.props.pokemonStat3}\n${this.props.pokemonStatName4} = ${this.props.pokemonStat4}\n${this.props.pokemonStatName5} = ${this.props.pokemonStat5}\n${this.props.pokemonStatName6} = ${this.props.pokemonStat6}\n${'Height = '+this.props.pokemonHeight+' hectograms'}\n${'weight = '+this.props.pokemonWeight+' decimeters'}`}
                data-title={this.props.pokemonName}>

                    <h2>{this.props.pokemonName}</h2>
                    <img src={this.props.pokemonImage} alt={this.props.pokemonName}/>

                    <div className={style.pokemonTypeContainer}>
                        <p style={{backgroundColor:typeColors[this.props.pokemonType]}} >{this.props.pokemonType}</p>
                        <p style={{backgroundColor:typeColors[this.props.pokemonType2]}} >{this.props.pokemonType2}</p>
                    </div>

                    {/* 
                    <div className={style.pokemonTypeContainerAbi}>
                        <p>{this.props.ability}</p>
                        <p>{this.props.ability2}</p>
                    </div> */}
                </div>
            </motion.div>
        )
    }

}

export default Pokemon


const typeColors = {
    bug: '#729f3f',
    dragon: '#53a4cf',
    fairy: '#fdb9e9',
    fire: '#c20000',
    ghost: '#7b62a3',
    ground: '#f7de3f',
    normal: '#a4acaf',
    psychic: '#f366b9',
    steel: '#cccccc',
    dark: '#666666',
    electric: '#eed535',
    fighting: '#d56723',
    flying: '#3dc7ef',
    grass: '#9bcc50',
    ice: '#51c4e7',
    poison: '#b97fc9',
    rock: '#a38c21',
    water: '#4592c4',
}
