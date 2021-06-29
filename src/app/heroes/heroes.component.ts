import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
})
export class HeroesComponent implements OnInit, AfterViewInit {
  // Hero Form vars
  // name: string = '';
  profileForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(1)]),
  });

  // Hero List vars
  heroes: Hero[] = [];

  @ViewChild('newName') newName: any;

  constructor(private heroService: HeroService, private fb: FormBuilder) {}
  ngAfterViewInit(): void {
    console.log(this.newName);
  }

  ngOnInit() {
    this.getHeroes();
    // this.profileForm = this.fb.group({
    //   name: ['', Validators.required],
    // });
    // this.name.valueChanges.subscribe((value) => {
    //   console.log('value: ', value);
    // });
    var interval = setInterval(() => console.log('A'), 10000);
  }

  get name() {
    return this.profileForm.get('name');
  }

  // Hero Form methods
  add(): void {
    // name = name.trim();
    if (this.profileForm.invalid) {
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
