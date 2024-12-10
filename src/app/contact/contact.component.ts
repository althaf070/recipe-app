import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [HeaderComponent,ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  demomail:string = "recipient@gmail.com";
  testimonialForm:FormGroup
  
  constructor(private fb:FormBuilder,private api:ApiService){
    this.testimonialForm=this.fb.group({
      name:[''],
      email:[''],
      message:[''],
    })
  }
  submitTestimonial(){
    const name = this.testimonialForm.value.name
    const email = this.testimonialForm.value.email
    const message = this.testimonialForm.value.message

    if(name && email && message){
      this.api.saveTestimonilaApi({name,email,message}).subscribe((res:any) => {
        alert("Thankk you for your testimonial")
        this.testimonialForm.reset()
      })
    }else {
      alert("Please fill all fields")
    }
  }
}
