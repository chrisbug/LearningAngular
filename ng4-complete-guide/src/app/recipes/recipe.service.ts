import { Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

   constructor(private shoppingListService: ShoppingListService){}

   setRecipes(recipes: Recipe[]){
     this.recipes = recipes;
     this.recipesChanged.next(this.recipes.slice());
   }

   private recipes: Recipe[] = [
    new Recipe(
      'Taco Chips',
      'This is just a test',
      'http://www.toppizza.ie/admin/dishes/Taco%20Cheese%20&%20Chips%20Taco%20Cheese%20&%20Chips%20Taco_CHIPS_Chees.jpg',
      [
        new Ingredient('meat', 1),
        new Ingredient('chips',20),
        new Ingredient('taco', 1)
      ]
    ),
    new Recipe(
      'Burger',
       'This is just a test 2',
        'http://www.tastyburger.com/wp-content/themes/tastyBurger/images/home/img-large-burger.jpg',
        [
          new Ingredient('buns', 2),
          new Ingredient('Meat', 1)
        ]
      )
  ];

  getRecipes(){
    return this.recipes.slice(); //by calling slice without peramenters it return a new array and not refrenc the object in memory whoop!
  }

  getRecipe(index: number){
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]){
    this.shoppingListService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe){
    this.recipes.push(recipe)
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe){
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number){
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
