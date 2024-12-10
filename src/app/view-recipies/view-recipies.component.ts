import { Component, Input } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { RouterLink } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-view-recipies',
  standalone: true,
  imports: [HeaderComponent,RouterLink],
  templateUrl: './view-recipies.component.html',
  styleUrl: './view-recipies.component.css'
})
export class ViewRecipiesComponent {
@Input() id!:string
recipe:any={}
allRelatedRecipes:any=[]
constructor(private api:ApiService){
}
ngOnInit(){
  // console.log(this.id);
  this.viewRecipe(this.id)
}
viewRecipe(id:string){
  this.api.viewRecipeApi(id).subscribe({
    next:(res:any)=> {
      this.recipe = res[0]
this.viewRelatedRecipes(res.cuisine)
    }
  })
}
viewRelatedRecipes(cuisine:string){
  this.api.allRelatedRecipes(cuisine).subscribe((res:any)=> {
 if(res.length>0){
  this.allRelatedRecipes=res.filter((item:any)=>item.name !=this.recipe.name)
 }
  })
}
}
