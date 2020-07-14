import { Component, OnInit } from '@angular/core';
import { Note } from 'src/app/shared/note.model';
import { NoteService } from 'src/app/shared/note.service';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.scss']
})
export class NotesListComponent implements OnInit {

  notes: Note[];
  filteredNotes: Note[] = new Array<Note>();
  searchText;

  constructor(private noteService: NoteService) { }

  ngOnInit(): void {
    this.notes= this.noteService.getAll();
    this.filteredNotes = this.notes;
  }

  filter(query: string){
    let allResults: Note[] = new Array<Note>();

    query = query.toLowerCase().trim();
    let terms: string[] = query.split(' ');

    terms = this.removeDuplicates(terms);
    let results:Note[] =[];
    terms.forEach(term=>{
      results = this.relevantNotes(term);
      allResults = [...allResults, ...results];
    });

    this.filteredNotes = this.removeDuplicates(allResults);
  }

  removeDuplicates(arr: Array<any>): Array<any>{
    let uniqueResults: Set<any> = new Set<any>();
    arr.forEach(element => uniqueResults.add(element));
    return Array.from(uniqueResults);
  }

  relevantNotes(query: string): Array<Note>{
    query = query.toLowerCase().trim();
    let relevantNotes = this.notes.filter(note => {
      if((note.title && note.title.toLowerCase().includes(query)) || (note.body && note.body.toLowerCase().includes(query))){
        return true;
      }
      return false;
    });
    return relevantNotes;
  }

}
