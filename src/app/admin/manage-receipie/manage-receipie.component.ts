import { Component } from '@angular/core';
import { ReceipieModel } from '../models/receipieModel';
import { ApiService } from '../../services/api.service';
import { Router } from 'express';

@Component({
  selector: 'app-manage-receipie',
  templateUrl: './manage-receipie.component.html',
  styleUrl: './manage-receipie.component.css'
})
export class ManageReceipieComponent {

  receipieDetails:ReceipieModel={}
  ingredients:string[]=[]
  instructions:string[]=[]
  mealType:string[]=[]

  constructor(private api:ApiService,private route:Router){}

  addIngredients(value:string)
  {
    this.ingredients.push(value)
  }
  addInstructions(value:string)
  {
    this.instructions.push(value)
  }
  removeInstruction(value:string){
    this.instructions=this.instructions.filter((item:string)=>item!=value)
  }
  mealTypeEvent(checkEvent:any){
    if(checkEvent.target.checked){
      !this.mealType.includes(checkEvent.target.name) && this.mealType.push(checkEvent.target.name)
    }else{
      this.mealType= this.mealType.filter((item:string)=>item!=checkEvent.target.value)
    }
  }
  addReceipie(){
    this.receipieDetails.ingredients=this.ingredients
    this.receipieDetails.instructions=this.instructions
    this.receipieDetails.mealType=this.mealType
    const {name && ingredients && instructions && prepTimeMinutes && cookTimeMinutes && servings 
      && difficulty && cuisine && caloriePerServing && image && mealType)
      {
        this.api.downloadReceipieAPI(this.receipieDetails).subscribe({next:(res:any)=>{
          alert("receipie added")
          this.router.navigateByUrl('/admin/all')
        }})
      }
    }
  }
}
