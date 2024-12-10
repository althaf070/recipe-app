import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
server_url = 'http://localhost:4000'
  constructor(private http:HttpClient) { }
  getAllRecipiesApis() {
    return this.http.get(`${this.server_url}/allrecipies`)
  }
  saveTestimonilaApi(reqBody:any){
    return this.http.post(`${this.server_url}/addtestmonial`,reqBody)
  }
  registerApi(reqBody:any){
    return this.http.post(`${this.server_url}/register`,reqBody)
  }
  loginApi(reqBody:any){
    return this.http.post(`${this.server_url}/login`,reqBody)
  }
  appendToken(){
    const token = sessionStorage.getItem("token")
    let headers = new HttpHeaders()
    if(token){
      headers.append("Authorization",`Bearer ${token}`)
    }
    return {headers}
  }
  addRecipeApi(recipeDetails:any){
    return this.http.post(`${this.server_url}/add-recipe`,recipeDetails)
  }
  viewRecipeApi(id:string){
    return this.http.get(`${this.server_url}/recipies/${id}/view`,this.appendToken())
  }
  allRelatedRecipes(cuisine:string){
    return this.http.get(`${this.server_url}/relatedrecipies?cuisine=${cuisine}`,this.appendToken())
  }
}
