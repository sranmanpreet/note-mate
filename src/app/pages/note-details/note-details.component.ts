import { Component, OnInit } from '@angular/core';
import { Note } from 'src/app/shared/note.model';
import { NgForm } from '@angular/forms';
import { NoteService } from 'src/app/shared/note.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-note-details',
  templateUrl: './note-details.component.html',
  styleUrls: ['./note-details.component.scss']
})
export class NoteDetailsComponent implements OnInit {

  note: Note;
  noteId: number;
  new: boolean;

  constructor(private noteService: NoteService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params)=> {
      if(params.id){
        this.note = this.noteService.getByIndex(params.id);
        this.noteId = params.id;
        this.new = false;
      } else {
        this.new = true;
        this.note = new Note();
      }
    });
  }

  onSubmit(f: NgForm) {
    if (f.valid) {
      if(this.new){
        this.noteService.add(f.value.title, f.value.body);
      } else {
        this.noteService.updateByIndex(this.noteId, f.value.title, f.value.body);
      }
      this.router.navigateByUrl('');
    }
  }

}
