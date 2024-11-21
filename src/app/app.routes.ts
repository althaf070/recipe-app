import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ContactComponent } from './contact/contact.component';
import { RecipiesComponent } from './recipies/recipies.component';
import { AboutComponent } from './about/about.component';
import { SavedRecipiesComponent } from './saved-recipies/saved-recipies.component';
import { ViewRecipiesComponent } from './view-recipies/view-recipies.component';

export const routes: Routes = [
    {path: '', component:HomeComponent},
    {path: 'login', component:LoginComponent},
    {path: 'register', component:RegisterComponent},
    {path: 'recipies', component:RecipiesComponent},
    {path: 'contact', component:ContactComponent},
    {path: 'about', component:AboutComponent},
    {path: 'saved-recipies', component:SavedRecipiesComponent},
    {path: 'recipies/:id/view', component:ViewRecipiesComponent},
];
