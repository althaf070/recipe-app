import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { ApiService } from '../services/api.service';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from '../pipes/search.pipe';
import { NgxPaginationModule } from "ngx-pagination";
import { Router } from '@angular/router';
@Component({
  selector: 'app-recipies',
  standalone: true,
  imports: [HeaderComponent,SearchPipe,FormsModule,NgxPaginationModule],
  templateUrl: './recipies.component.html',
  styleUrl: './recipies.component.css'
})
export class RecipiesComponent {
allRecipies:any=[]
allRecipiesDummy:any=[]
searchKey:string=""
p:number=1
constructor(private api:ApiService, private router:Router ){}
ngOnInit() {
  this.getAllRecipies()
}
getAllRecipies(){
  this.api.getAllRecipiesApis().subscribe((res:any)=>{
    this.allRecipies = res
    this.allRecipiesDummy=this.allRecipies
    console.log(this.allRecipies);
  })
}
filterRecipies(recipetype:string,recipeName:string){
this.allRecipies =this.allRecipiesDummy.filter((item:any)=>item[recipetype].includes(recipeName))
}
viewRecipies(recipiesId:any){
  if(sessionStorage.getItem("token")){
    this.router.navigateByUrl(`/recipies/${recipiesId}/view`)
  }else {
    alert("please login to view recipie")
  }
}
}
