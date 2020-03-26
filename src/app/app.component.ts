import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {demo} from '../models/tutorials.models';
import {Appstate} from './app.state';
import {Observable} from 'rxjs/Observable';
import * as Tutorialsactionfields from '../Actions/tutorial.action';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  bhanututorials : Observable<demo[]>;
   constructor(private store:Store<Appstate>){
    this.bhanututorials = store.select('tutorials');

  // type Name = string;
  // type NameResolver = () => string;
  // type NameOrResolver = Name | NameResolver;
  // console.log(NameResolver);

  // function getName(n: NameOrResolver): Name {
  //     if (typeof n === "string") {
  //         return n;
  //     }
  //     else {
  //         return n();
  //     }
  // }

}
  ngOnInit() {
    this.addtutuorials('Mamu',"http://animals.com");
  }

  addtutuorials(name,url){
     this.store.dispatch(new Tutorialsactionfields.Addturials({name:name , url:url}));
  }
  cliking(index){
    console.log(index);
    this.store.dispatch(new Tutorialsactionfields.Removetutor(index));
  }


}
