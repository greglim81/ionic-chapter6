import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { NoteService } from '../../app/note.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  notes;

  constructor(public navCtrl: NavController, private noteService: NoteService) {    
  }

  ngOnInit(){                         
    this.noteService.fetchNotes()
      .then(res => {
        this.notes = this.noteService.notes;          
      });           
  }
 
  onItemClick(note){        
    this.navCtrl. push('Detail',{
      noteParam : note
    });             
  } 

  onAddClick(){    
    this.navCtrl.push('Detail'); // for add, don’t pass in any parameters.
  }
}

      /*
      this.navCtrl. push(Detail, {
        // storageproductId: product.id
        //firebase working 
        productId: product.$key,
        userId: this.userId        
      });   
      */ 
