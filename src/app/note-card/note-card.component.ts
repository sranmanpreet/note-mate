import { Component, OnInit, Input } from '@angular/core';
import { Note } from '../shared/note.model';
import { NoteService } from '../shared/note.service';

@Component({
  selector: 'app-note-card',
  templateUrl: './note-card.component.html',
  styleUrls: ['./note-card.component.scss']
})
export class NoteCardComponent implements OnInit {

  @Input() title: String;
  @Input() body: String;
  @Input() noteId: Number;

  constructor(private noteService: NoteService) { }

  ngOnInit(): void {
  }
  
  delete(){
    this.noteService.deleteOne(this.noteId);
  }

}
