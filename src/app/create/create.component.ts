import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';
import { Sample } from '../models/sample.model';
import * as SampleActions from '../actions/sample.actions';
import { Observable } from "rxjs/Observable";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
  }

  addSample(name, url) {
    this.store.dispatch(new SampleActions.AddSample({ name: name, url: url}))
  }

}
