import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Sample } from '../models/sample.model';

// actions
export const ADD_SAMPLE = '[SAMPLE] Add'
export const REMOVE_SAMPLE = '[SAMPLE] Remove'

// class
export class AddSample implements Action {
    readonly type = ADD_SAMPLE;

    constructor(public payload: Sample) {}
}

export class RemoveSample implements Action {
    readonly type = REMOVE_SAMPLE;

    constructor(public payload: number) {}
}


export type Actions = AddSample | RemoveSample
