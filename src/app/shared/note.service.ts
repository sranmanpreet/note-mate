import { Injectable } from '@angular/core';
import { Note } from './note.model';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  private notes: Note[] = [
        { title : "Buy Cookies (default)", body: "Buy Tiger for Sartaj, OREO for Joe"},
        { title : "Buy Sandles (default)", body: "Buy Sandles for Sartaj"},
        { title : "Complete NoteMate (default)", body: "Complete NoteApp development by Thursday"},
        { title : "Buy Vegetables (default)", body: "Buy Vegies"}
  ];

  constructor(private cookieService: CookieService) {
  }

  getAll() {
    if (this.cookieService.check('notes')) {
      this.notes = JSON.parse(this.cookieService.get('notes'));
    }
    return this.notes;
  }

  getByIndex(index: number) {
    return this.notes[index];
  }

  add(title: String, body: String) {
    let note = new Note();
    note.title = title;
    note.body = body;
    this.notes.push(note);
    this.cookieService.set('notes', JSON.stringify(this.notes));
    return this.notes;
  }

  updateByIndex(index: Number, title: string, body: string) {
    this.notes[index.valueOf()].title = title;
    this.notes[index.valueOf()].body = body;
    this.cookieService.set('notes', JSON.stringify(this.notes));
    return this.notes;
  }

  deleteOne(index: Number) {
    this.notes.splice(index.valueOf(), 1);
    this.cookieService.set('notes', JSON.stringify(this.notes));
    return this.notes;
  }
}
