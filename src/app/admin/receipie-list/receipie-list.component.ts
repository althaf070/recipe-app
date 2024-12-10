import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-receipie-list',
  templateUrl: './receipie-list.component.html',
  styleUrl: './receipie-list.component.css'
})
export class ReceipieListComponent {

  searchKey:string=""
  allReceipies:any=[]
  constructor(private api:ApiService){}

  ngOnInit(){
    this.getAllReceipies()
  }
  getAllReceipies()
  {
    this.api.getAllReceipieAPI().subscribe((res:any)=>{
      this.allReceipies=res
      console.log(this.allReceipies);
    })
  }
  removeReceipie(id:any){
    this.api.deleteReceipieAPI(id).subscribe((res:any)=>{
      this.getAllReceipies()
    })
  }

}
