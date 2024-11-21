import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
@Component({
  selector: 'app-recipies',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './recipies.component.html',
  styleUrl: './recipies.component.css'
})
export class RecipiesComponent {

}
