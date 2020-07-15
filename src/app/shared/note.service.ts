import { Injectable } from '@angular/core';
import { Note } from './note.model';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  private notes: Note[] = [
        { title : "Example Note (default)", body: "This note is an example note."},
        { title : "Getting the band back together (default)", body: ""},
        { title : "Buy Umbrella (default)", body: ""},
        { title : "Groceries (default)", body: "Tea, Sugar, Cookies, Toothpaste"}
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
