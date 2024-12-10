import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
  standalone: true
})
export class SearchPipe implements PipeTransform {

  transform(allRecipies:any[],searchkey:string): any[] {
    const result:any=[]
    if(!allRecipies || searchkey === ""){
      return allRecipies
    }
    allRecipies.forEach(item=>{
      if(item.name.toLowerCase().includes(searchkey.toLowerCase())){
        result.push(item)
      }
    })
    return result
  }

}
