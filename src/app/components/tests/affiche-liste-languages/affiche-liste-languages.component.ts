import { Component, EventEmitter, Input, Output,  } from '@angular/core';

@Component({
  selector: 'app-affiche-liste-languages',
  standalone: false,

  templateUrl: './affiche-liste-languages.component.html',
  styleUrl: './affiche-liste-languages.component.css'
})
export class AfficheListeLanguagesComponent {
  //Valeur reçu du parent
  @Input() listelanguages!: string[];
  selectedLanguage?: string;

  @Output() sendValue = new EventEmitter<string>();

  selectLanguage(param: string) {
    this.sendValue.emit(param);
    this.selectedLanguage = param;
   
  }

}
