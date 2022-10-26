import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { PokemonService } from '../../Service/pokemon.service';
import { result } from '../interface/interface';

@Component({
  selector: 'app-poke-detail',
  templateUrl: './poke-detail.component.html',
  styleUrls: ['./poke-detail.component.scss'],
})
export class PokeDetailComponent implements OnInit {
  data!: result;
  constructor(
    private pokeService: PokemonService,
    private activateRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activateRoute.params.subscribe((params) => {
      console.log(params);
      this.pokeService.getOnePokemon(params['id']).subscribe({
        next: (data) => {
          this.data = data;
          console.log(data);
        },
        error: (err) => {},
      });
    });
  }
}
