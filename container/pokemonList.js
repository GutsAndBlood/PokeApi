import Pokemon from '@/components/pokemon';
import style from '@/styles/PokemonList.module.css'
import axios from 'axios';
import React, { Component } from 'react'


class PokemonList extends Component {

    state={
        pokemon:[],
        isOpen:false
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
    
    toggleHandler = () => {
        const value = this.state.isOpen
        this.setState({isOpen: !value})
          
    }

    componentDidUpdate(){
        console.log(this.state.pokemon[0].types.length)
    }

    render() {

        return (
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
                    toggle={this.toggleHandler}/>

                ))}
            </div>
        )
    }
}


export default PokemonList
