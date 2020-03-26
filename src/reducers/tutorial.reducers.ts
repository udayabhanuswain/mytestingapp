import {Action} from '@ngrx/store';
import {demo} from '../models/tutorials.models';
import * as tutorialsAction from '../Actions/tutorial.action';

 const initialstate:demo = {
    name:'udaya',
    url:'https://google.com'
 }
 export function reducer (state : demo[]=[initialstate] , actions:tutorialsAction.UdayaActions){
switch(actions.type){

case tutorialsAction.ADD_TUTO :
return [...state,actions.payload]

case tutorialsAction.REMOVE_TUTO :
return state.splice(actions.payload , 1);

default:
    return state;

}


 }