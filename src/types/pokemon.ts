export interface Pokemon {
    id: number;
    name: string;
    abilities: PokemonAbility[];
    stats: PokemonStat[];
    types: PokemonType[];
    height: number;
    weight: number;
    sprites: {
      other: {
        "official-artwork": {
          front_default: string;
        };
      };
    };
  }
  
  export interface PokemonType {
    type: {
      name: string;
    };
  }
  
  export interface PokemonStat {
    base_stat: number;
    stat: {
      name: string;
    };
  }
  
  export interface PokemonAbility {
    ability: {
      name: string;
      url: string;
    };
    isHidden: boolean;
    slot: number;
  }