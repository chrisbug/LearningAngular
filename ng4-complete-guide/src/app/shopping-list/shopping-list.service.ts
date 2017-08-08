import {EventEmitter} from '@angular/core';
import {Ingredient } from '../shared/ingredient.model';

export class ShoppingListService{
  ingredientChanged = new EventEmitter<Ingredient[]>();
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];

  getIngredients(){
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient){
    this.ingredients.push(ingredient);
    this.ingredientChanged.emit(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]) {
    // for(let ingredient of ingredients) {
    //   this.addIngredient(ingredient);
    // }
    this.ingredients.push(...ingredients); //... is called a spread and converts arrays into a list e.g [1,2] becomes 1,2
    this.ingredientChanged.emit(this.ingredients.slice());
  }
}
