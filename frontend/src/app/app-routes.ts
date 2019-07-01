import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//Importing templates
import { CreateComponent } from './components/create/create.component';
import { EditComponent } from './components/edit/edit.component';
import { ListComponent } from './components/list/list.component';

export const routes: Routes = [
    { path: 'create', component: CreateComponent },
    { path: 'edit/:id', component: EditComponent },
    { path: 'list', component: ListComponent },
    { path: '', redirectTo: '/list', pathMatch: 'full' }
];