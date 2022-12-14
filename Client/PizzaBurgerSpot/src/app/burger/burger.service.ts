import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IBurger, IBurgerIngredient } from '../shared/interfaces';

const apiURL = environment.apiURL;

@Injectable({
  providedIn: 'root'
})
export class BurgerService {

  constructor(private httpClient: HttpClient) { }

  loadBurgerIngredients(){
    return this.httpClient.get<IBurgerIngredient[]>(`${apiURL}/burgerIngredient`);
  };

  loadBurgerIngredient(id: string){
    return this.httpClient.get<IBurgerIngredient>(`${apiURL}/burgerIngredient/${id}`);
  };

  loadBurgers(){
    return this.httpClient.get<IBurger[]>(`${apiURL}/burger`);
  };

  loadBurger(id: string){
    return this.httpClient.get<IBurger>(`${apiURL}/burger/${id}`);
  };

  deleteBurger(id: string){
    return this.httpClient.delete<null>(`[authenticate]${apiURL}/burger/delete/${id}`);
  };

  createBurger(burger: any){
    return this.httpClient.post<IBurger>(`[authenticate]${apiURL}/burger/create/new`, {burger});
  };

  getUserBurgers(id: string){
    return this.httpClient.get<IBurger[]>(`[authenticate]${apiURL}/burger/user/${id}`);
  }
};