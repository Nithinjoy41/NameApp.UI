import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Name } from 'src/app/models/Name';
import { NameService } from 'src/app/services/name.service';

@Component({
  selector: 'app-edit-name',
  templateUrl: './edit-name.component.html',
  styleUrls: ['./edit-name.component.css']
})
export class EditNameComponent implements OnInit {
@Input() name?:Name;
@Output() personsUpdated = new EventEmitter<Name[]>();

  constructor(private nameService : NameService) {}

  ngOnInit(): void {
  }

  updatePerson(name: Name){
    this.nameService.updatePerson(name).subscribe((names: Name[]) => this.personsUpdated.emit(names));
    name.hide = true;
  }
  deletePerson(name: Name){
    this.nameService.deletePerson(name).subscribe((names: Name[]) => this.personsUpdated.emit(names));
    name.hide = true;
  }
  createPerson(name: Name){
    this.nameService.createPerson(name).subscribe((names: Name[]) => this.personsUpdated.emit(names));
    name.hide = true;
  }
}
