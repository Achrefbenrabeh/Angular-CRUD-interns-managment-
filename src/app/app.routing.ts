import { RouterModule, Routes } from "@angular/router";
import { CvComponent } from "./cvTech/cv/cv.component";
import { DetailComponent } from "./cvTech/detail/detail.component";
import { AddCvComponent } from "./cvTech/add-cv/add-cv.component";
import { ErrorComponent } from "./cvTech/error/error.component";
import { HomeComponent } from "./cvTech/home/home.component";
import { LoginComponent } from "./login/login.component";
import { UpdateCvComponent } from "./cvTech/update-cv/update-cv.component";
import { AuthGuard } from "./guard/auth.guard";
import { LogouthGuard } from "./guard/logout.guard";

const APP_ROUTING: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' }, 
    { path: 'login', component: LoginComponent, canActivate :[LogouthGuard]},
    
    { path: 'cv', children: [
        { path: '', component: CvComponent , canActivate:[AuthGuard] },
        { path: 'cvUpdate/:id', component: UpdateCvComponent , canActivate:[AuthGuard]},
        { path: 'add', component: AddCvComponent, canActivate:[AuthGuard] },
        { path: ':id', component: DetailComponent }
    ]},
    { path: 'home', component: HomeComponent , canActivate:[AuthGuard] },
    { path: '**', component: ErrorComponent }
];

export const ROUTING = RouterModule.forRoot(APP_ROUTING);