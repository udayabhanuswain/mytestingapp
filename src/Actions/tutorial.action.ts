import { Injectable} from '@angular/core';
import {Action} from '@ngrx/store';
import {demo} from '../models/tutorials.models';


export const ADD_TUTO="[Tutorials] Add";
export const REMOVE_TUTO="[Tutorials] Rmv";

export class Addturials implements Action{
readonly type = ADD_TUTO;
constructor(public payload:demo){}
}
export class Removetutor implements Action{
    readonly type = REMOVE_TUTO;
    constructor(public payload:number){}
 }

 

 export type UdayaActions = Addturials | Removetutor