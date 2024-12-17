import { Component } from '@angular/core';

@Component({
  selector: 'app-tests',
  standalone: false,
  
  templateUrl: './tests.component.html',
  styleUrl: './tests.component.css'
})
export class TestsComponent {

  languages: string [] = [
    "TypeScript",
    "Swift",
    "Kotlin",
    "Go (Golang)",
    "Ruby",
    "PHP",
    "Java",
    "Python",
    "JavaScript"
  ];
  showlangages: boolean = true; //Pour contrôler l'affichage de la liste
  selectedLanguage: string = ''; //Langages sélectionné
  textColor: string  = 'blue';
  fontSize: number = 3;
  activeLanguages: string[] = ['Typescript','JavaScript'];

  recupValue(param: string){
    this.selectedLanguage = param;
  }
}
