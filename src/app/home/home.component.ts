import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { RouterLink } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent,RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
homeRecipies:any=[]

constructor(private api:ApiService){}

ngOnInit() {
  this.getAllHomeRecipies()
}
getAllHomeRecipies(){
  this.api.getAllRecipiesApis().subscribe((res:any)=> {
    this.homeRecipies = res.slice(0,6)
    console.log(this.homeRecipies);
    
  })
}
}
