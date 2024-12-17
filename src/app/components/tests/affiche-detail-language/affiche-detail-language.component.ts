import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-affiche-detail-language',
  standalone: false,
  
  templateUrl: './affiche-detail-language.component.html',
  styleUrl: './affiche-detail-language.component.css'
})
export class AfficheDetailLanguageComponent {
  @Input () language!: string;

}
