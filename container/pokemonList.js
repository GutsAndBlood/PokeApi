import Pokemon from '@/components/pokemon';
import style from '@/styles/PokemonList.module.css'
import axios from 'axios';
import React, { Component } from 'react'


class PokemonList extends Component {

    state={
        pokemon:[],
    }

    componentDidMount() {

        const random = Math.floor(Math.random() * 600)
        const url = `https://pokeapi.co/api/v2/pokemon/`
        const pokemonList = []
      
        for(let i = random; i < random+5; i++){

            axios.get(url+i)      
            .then( res =>{
                const pokemonFullList = res.data
                pokemonList.push(pokemonFullList) 
                this.setState({pokemon: pokemonList})
            })
        }
        
    }

    render() {

        return (
            <div className={style.pokemonMain}>
                <div className={style.pokemonContainer}>

                    {this.state.pokemon.map((pokemon,index) => (
                    
                        <Pokemon className={style.item}
                        key={index}
                        pokemonName={pokemon.name}      
                        pokemonImage={pokemon.sprites.front_default} 
                        ability={pokemon.abilities[0].ability.name}
                        ability2={pokemon.abilities.length > 1 && pokemon.abilities[1].ability.name}      
                        pokemonType={pokemon.types[0].type.name}
                        pokemonType2={pokemon.types.length > 1 && pokemon.types[1].type.name}
                        pokemonMove={pokemon.moves[0].move.name}
                        pokemonMove2={pokemon.moves.length > 1 && pokemon.moves[1].move.name}
                        pokemonStatName={pokemon.stats[0].stat.name} pokemonStat={pokemon.stats[0].base_stat}
                        pokemonStatName2={pokemon.stats[1].stat.name} pokemonStat2={pokemon.stats[1].base_stat}
                        pokemonStatName3={pokemon.stats[2].stat.name} pokemonStat3={pokemon.stats[2].base_stat}
                        pokemonStatName4={pokemon.stats[3].stat.name} pokemonStat4={pokemon.stats[3].base_stat}
                        pokemonStatName5={pokemon.stats[4].stat.name} pokemonStat5={pokemon.stats[4].base_stat}
                        pokemonStatName6={pokemon.stats[5].stat.name} pokemonStat6={pokemon.stats[5].base_stat}
                        pokemonHeight={pokemon.height}
                        pokemonWeight={pokemon.weight}
                        />

                    ))}
                </div>
            </div>
        )
    }
}


export default PokemonList
