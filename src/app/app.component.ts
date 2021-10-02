import {Component, OnInit} from '@angular/core';
import {Pokemon} from "./_models/pokemon";
import {POKEMONS} from "./mock/pokemons";

@Component({
  selector: 'pokemon-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  public title = 'pokemon-app';

  public pokemons: Pokemon[];
  public value: string = '';

  ngOnInit() {
    this.pokemons = POKEMONS;
  }

  selectPokemon(pokemon: Pokemon) {
    alert("Vous avez séléctionné le pokemon" + pokemon.name);
  }

  onClick() {

  }

  onKey(value: string) {
    this.value = 'Bonjour ' + value;
  }
}
