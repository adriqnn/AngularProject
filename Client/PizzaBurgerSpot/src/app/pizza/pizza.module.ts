import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PizzaComponent } from './pizza/pizza.component';
import { PizzaIngredientComponent } from './pizza-ingredient/pizza-ingredient.component';
import { RouterModule } from '@angular/router';
import { PizzaIngredientDetailsComponent } from './pizza-ingredient-details/pizza-ingredient-details.component';
import { PizzaDetailsComponent } from './pizza-details/pizza-details.component';
import { PizzaDeleteComponent } from './pizza-delete/pizza-delete.component';
import { PizzaCreateComponent } from './pizza-create/pizza-create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    PizzaComponent,
    PizzaIngredientComponent,
    PizzaIngredientDetailsComponent,
    PizzaDetailsComponent,
    PizzaDeleteComponent,
    PizzaCreateComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PizzaModule { };
