import { Component, OnInit } from '@angular/core';
import { Hero } from '../../models/hero';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FormBuilder, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { AppState, selectHero } from 'src/app/store/hero/hero.selectors';
import * as heroActions from '../../store/hero/hero.actions';
import { Observable, Subject, BehaviorSubject, of } from 'rxjs';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss'],
})
export class HeroDetailComponent implements OnInit {
  heroForm;
  hero$?: Observable<Hero>;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private fb: FormBuilder,
    private store: Store<AppState>
  ) {
    this.heroForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
    });
  }

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.store.dispatch(new heroActions.ActionGetHero({ id: id }));
    this.store.pipe(select(selectHero)).subscribe(
      (hero) => {
        console.log('H2', hero);
        this.heroForm.setValue({
          name: hero.name,
        });
      },
      (err) => {
        console.log('Error', err);
      },
      () => console.log('WTF DMM TS')
    );
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    //   this.store.dispatch(
    //     new heroActions.ActionUpdateHero({ hero: this.hero$! })
    //   );
  }
}
