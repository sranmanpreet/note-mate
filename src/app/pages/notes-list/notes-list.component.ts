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
  searchText;

  constructor(private noteService: NoteService) { }

  ngOnInit(): void {
    this.notes= this.noteService.getAll();
  }

}
