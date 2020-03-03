import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';
import { Sample } from '../models/sample.model';
import * as SampleActions from '../actions/sample.actions';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.scss']
})
export class ReadComponent implements OnInit {

  samples: Observable<Sample[]>

  constructor(private store: Store<AppState>) { 
    // sample is reducer name coming from app module ex. 'StoreModule.forRoot({sample: reducer})'
    this.samples = store.select('sample')
  }

  ngOnInit(): void {
  }

  delSample(i) {
    this.store.dispatch(new SampleActions.RemoveSample(i))
  }

}
