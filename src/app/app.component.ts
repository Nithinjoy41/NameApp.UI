import { Component, EventEmitter, Output } from '@angular/core';
import { Name } from './models/Name';
import { NameService } from './services/name.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'NameApp.UI';
  names : Name[] = [];
  personToEdit? : Name;
 personsUpdated = new EventEmitter<Name[]>();

  constructor(private nameService : NameService){}

  ngOnInit() : void {
   this.nameService.getNames().subscribe((result : Name[]) => (this.names = result));
  }

  UpdatePersonsList(names : Name[])
    {
      this.names = names;
    }
  InitNewPerson(){
this.personToEdit = new Name();
  }

  EditPerson(name: Name){
    this.personToEdit = name;
      }

      deletePerson(name: Name){
        this.nameService.deletePerson(name).subscribe((names: Name[]) => this.personsUpdated.emit(names));
        this.names  = this.names.filter(item => item.id !== name.id)
      }
    }

