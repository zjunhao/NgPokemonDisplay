using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Threading.Tasks;

namespace PokemonDataService.Models
{
    [DataContract]
    public class Pokemon
    {
        [DataMember(Name ="id")]
        public int Id;
        
        [DataMember(Name = "name")]
        public string Name;

        [DataMember(Name = "types")]
        public string[] Types;

        [DataMember(Name = "height")]
        public int Height;

        [DataMember(Name = "weight")]
        public int Weight;

        [DataMember(Name = "description")]
        public string Description;


    }
}
