import { getLocaleFirstDayOfWeek, NgIfContext } from '@angular/common';
import { Component, OnInit, Type } from '@angular/core';
import { PokemonService } from 'src/app/Service/pokemon.service';
import { ActivatedRoute } from '@angular/router';
import { result } from '../interface/interface';

@Component({
  selector: 'app-poke-table',
  templateUrl: './poke-table.component.html',
  styleUrls: ['./poke-table.component.scss'],
})
export class PokeTableComponent implements OnInit {
  data: any = [];

  constructor(private pokeService: PokemonService) {}

  ngOnInit(): void {
    this.getPokemons();
  }

  getPokemons() {
    this.pokeService.getPokemons().subscribe({
      next: (data) => {
        this.data = data;
        console.log(data);
      },

      error: (error) => {
        console.log(error);
      },
    });
  }
}
