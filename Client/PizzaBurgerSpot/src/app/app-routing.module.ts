import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { LogoutComponent } from './auth/logout/logout.component';
import { ProfileComponent } from './auth/profile/profile.component';
import { RegisterComponent } from './auth/register/register.component';
import { BurgerCreateComponent } from './burger/burger-create/burger-create.component';
import { BurgerDeleteComponent } from './burger/burger-delete/burger-delete.component';
import { BurgerDetailsComponent } from './burger/burger-details/burger-details.component';
import { BurgerIngredientDetailsComponent } from './burger/burger-ingredient-details/burger-ingredient-details.component';
import { BurgerIngredientComponent } from './burger/burger-ingredient/burger-ingredient.component';
import { BurgerComponent } from './burger/burger/burger.component';
import { BurgerIngredientResolver } from './burger/resolvers/burger.ingredient.resolver';
import { BurgerResolver } from './burger/resolvers/burger.resolver';
import { AboutComponent } from './core/about/about.component';
import { ContactsComponent } from './core/contacts/contacts.component';
import { ErrorComponent } from './core/error/error.component';
import { AuthenticatedActivate } from './core/guards/authenticated.activate';
import { UnAuthenticatedActivate } from './core/guards/unauthenticated.activate';
import { HomeComponent } from './core/home/home.component';
import { NotFoundComponent } from './core/not-found/not-found.component';
import { PizzaCreateComponent } from './pizza/pizza-create/pizza-create.component';
import { PizzaDeleteComponent } from './pizza/pizza-delete/pizza-delete.component';
import { PizzaDetailsComponent } from './pizza/pizza-details/pizza-details.component';
import { PizzaIngredientDetailsComponent } from './pizza/pizza-ingredient-details/pizza-ingredient-details.component';
import { PizzaIngredientComponent } from './pizza/pizza-ingredient/pizza-ingredient.component';
import { PizzaComponent } from './pizza/pizza/pizza.component';
import { PizzaResolver } from './pizza/resolvers/pizza.resolver';
import { PizzaIngredientResolver } from './pizza/resolvers/pizza.ingredient.resolver';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent,
    data: {
        title: 'Home',
        loginRequired: false
    }
  },
  {
    path: 'about',
    pathMatch: 'full',
    component: AboutComponent,
    data: {
        title: 'About',
        loginRequired: false
    }
  },
  {
    path: 'contacts',
    pathMatch: 'full',
    component: ContactsComponent,
    data: {
        title: 'Contacts',
        loginRequired: false
    }
  },
  {
    path:'auth/login',
    component: LoginComponent,
    canActivate: [AuthenticatedActivate],
    data: {
        title: 'Login',
        loginRequired: false,
        alreadyLoggedIn: true
    }
},
{
    path:'auth/register',
    component: RegisterComponent,
    canActivate: [AuthenticatedActivate],
    data: {
        title: 'Register',
        loginRequired: false,
        alreadyLoggedIn: true
    }
},
{
    path:'auth/logout',
    component: LogoutComponent,
    canActivate: [UnAuthenticatedActivate],
    data: {
        title: 'Logout',
        loginRequired: true,
        unAutenticated: true
    }
},
{
    path:'auth/profile',
    component: ProfileComponent,
    canActivate: [UnAuthenticatedActivate],
    data: {
        title: 'Profile',
        loginRequired: false,
        unAutenticated: true
    }
},
{
    path:'pizzas',
    pathMatch: 'full',
    component: PizzaComponent,
    data: {
        title: 'Pizzas',
        loginRequired: false
    }
},
{
    path:'burgers',
    pathMatch: 'full',
    component: BurgerComponent,
    data: {
        title: 'Burgers',
        loginRequired: false
    }
},
{
    path:'pizzas/create',
    pathMatch: 'full',
    canActivate: [UnAuthenticatedActivate],
    component: PizzaCreateComponent,
    data: {
        title: 'Pizzas',
        loginRequired: true,
        unAutenticated: true
    }
},
{
    path:'burgers/create',
    pathMatch: 'full',
    canActivate: [UnAuthenticatedActivate],
    component: BurgerCreateComponent,
    data: {
        title: 'Burgers',
        loginRequired: true,
        unAutenticated: true
    }
},
{
    path:'burgers/item/:id',
    component: BurgerDetailsComponent,
    resolve: {
        burger: BurgerResolver
    },
    data: {
        title: 'Burgers',
        loginRequired: false
    }
},
{
    path:'pizzas/item/:id',
    component: PizzaDetailsComponent,
    resolve: {
        pizza: PizzaResolver
    },
    data: {
        title: 'Pizzas',
        loginRequired: false
    }
},
{
    path:'burgers/item/delete/:id',
    canActivate: [UnAuthenticatedActivate],
    component: BurgerDeleteComponent,
    data: {
        title: 'Burgers',
        loginRequired: true,
        unAutenticated: true
    }
},
{
    path:'pizzas/item/delete/:id',
    canActivate: [UnAuthenticatedActivate],
    component: PizzaDeleteComponent,
    data: {
        title: 'Pizzas',
        loginRequired: true,
        unAutenticated: true
    }
},
{
    path:'pizzas/pizzaIngredient',
    pathMatch: 'full',
    component: PizzaIngredientComponent,
    data: {
        title: 'Pizza Ingredients',
        loginRequired: false
    }
},
{
    path:'burgers/burgerIngredient',
    pathMatch: 'full',
    component: BurgerIngredientComponent,
    data: {
        title: 'Burger Ingredients',
        loginRequired: false
    }
},
{
    path:'pizzas/pizzaIngredient/:id',
    component: PizzaIngredientDetailsComponent,
    resolve:{
        pizzaIngredient: PizzaIngredientResolver 
    },
    data: {
        title: 'Pizzas',
        loginRequired: false
    }
},
{
    path:'burgers/burgerIngredient/:id',
    component: BurgerIngredientDetailsComponent,
    resolve:{
        burgerIngredient: BurgerIngredientResolver 
    },
    data: {
        title: 'Burgers',
        loginRequired: false
    }
},
{
    path:'not-found',
    component: NotFoundComponent,
    data: {
        title: 'NotFound',
        loginRequired: false
    }
},
{
    path:'**',
    component: ErrorComponent,
    data: {
        title: 'Error',
        loginRequired: false
    }
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
