import { Storage } from '@ionic/storage';
import { Injectable } from '@angular/core';

@Injectable()
export class NoteService{    

  // copy notes data from home page 
  notes;

  constructor(private storage : Storage){      
  }  

  fetchNotes(){        
    return this.storage.get('notes') // returns a promise which returns data or error    
      .then(
        (notes) => {
        // assign to this.expenses only if not null. When first //strt, can be null. If null, assign empty array []
          notes? this.notes = notes : this.notes = [];                                                      
      })  
      .catch(
        err => console.log(err)
      );                  
  }  

  removeNote(note){
      let index = this.notes.indexOf(note);
      if(index > -1){
        this.notes.splice(index,1);
        this.writeToStorage();
      }
  }

  addNote(note){    
    this.notes.push(note);
    this.writeToStorage();        
  } 

  writeToStorage(){
    // if new note just push else do nothing and set

    this.storage.set('notes',this.notes) // set key-value pairs
    .then(// successful add
    // do nothing
    ) // we also get a promise when do this and allow us to 
    .catch(err => {// catch errors and do error handling here
        err => console.log(err);
    });        
  }  
}
