import { Injectable } from '@angular/core';
import { Note } from './note.model';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  private notes:Note[] = [
    { title : "Buy Cookies", body: "Buy Tiger for Sartaj, OREO for Joe"},
    { title : "Buy Sandles", body: "Buy Sandles for Sartaj"},
    { title : "Complete NoteMate", body: "Complete NoteApp development by Thursday"},
    { title : "Buy Vegetables", body: "Buy Vegies"},
    { title : "Buy Cookies", body: "Buy Tiger for Sartaj, OREO for Joe"},
    { title : "Buy Sandles", body: "Buy Sandles for Sartaj"},
    { title : "Complete NoteMate", body: "Complete NoteApp development by Thursday"},
    { title : "Buy Vegetables", body: "Buy Vegies"},
    { title : "Buy Cookies", body: "Buy Tiger for Sartaj, OREO for Joe"},
    { title : "Buy Sandles", body: "Buy Sandles for Sartaj"},
    { title : "Complete NoteMate", body: "Complete NoteApp development by Thursday"},
    { title : "Buy Vegetables", body: "Buy Vegies"},
    { title : "Buy Cookies", body: "Buy Tiger for Sartaj, OREO for Joe"},
    { title : "Buy Sandles", body: "Buy Sandles for Sartaj"},
    { title : "Complete NoteMate", body: "Complete NoteApp development by Thursday"},
    { title : "Buy Vegetables", body: "Buy Vegies"}
  ];

  constructor() {
   }

  getAll(){
    return this.notes;
  }

  getByIndex(index:number){
    return this.notes[index];
  }

  add(title: String, body: String){
    let note = new Note();
    note.title = title;
    note.body = body;
    this.notes.push(note);
    return this.notes;
  }

  updateByIndex(index:Number, title: string, body:string){
    this.notes[index.valueOf()].title = title;
    this.notes[index.valueOf()].body = body; 
    return this.notes;
  }

  deleteOne(index: Number){
    this.notes.splice(index.valueOf(), 1);
    return this.notes;
  }
}
