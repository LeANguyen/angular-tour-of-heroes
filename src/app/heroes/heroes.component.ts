import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
})
export class HeroesComponent implements OnInit, AfterViewInit {
  // Hero Form vars
  addForm;

  // Hero List vars
  heroes: Hero[] = [];

  @ViewChild('newName') newName: any;

  constructor(private heroService: HeroService, private fb: FormBuilder) {
    this.addForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength]],
    });
  }

  ngAfterViewInit(): void {
    console.log(this.newName);
  }

  ngOnInit() {
    this.getHeroes();
  }

  get name() {
    return this.addForm.get('name');
  }

  // Hero Form methods
  add(): void {
    if (this.addForm.invalid) {
      return;
    }
    this.heroService
      .addHero({ name: this.name?.value } as Hero)
      .subscribe((hero) => {
        this.heroes.push(hero);
        this.name?.setValue('');
      });
  }

  // Hero List methods
  getHeroes(): void {
    this.heroService.getHeroes().subscribe((heroes) => (this.heroes = heroes));
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter((h) => h !== hero);
    this.heroService.deleteHero(hero.id).subscribe();
  }
}
