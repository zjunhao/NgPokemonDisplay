using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Runtime.Serialization;
using System.Runtime.Serialization.Json;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using PokemonDataService.Models;


namespace PokemonDataService.Controllers
{
    [Route("datasrc/pokemons")]
    [ApiController]
    public class PokemonDataController : Controller
    {
        [HttpGet]
        public Pokemon[] Get()
        {
            Pokemon[] pokemons;

            using (Stream pokemonStream = System.IO.File.OpenRead(@".\pokemon.json"))
            {
                DataContractJsonSerializer pokemonSerializer = new DataContractJsonSerializer(typeof(Pokemon[]));
                pokemons = pokemonSerializer.ReadObject(pokemonStream) as Pokemon[];
            }
            
            return pokemons;
        }
    }
}
