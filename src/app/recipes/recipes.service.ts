import { Injectable } from '@angular/core';
import {Recipe} from "./recipe.model";

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  private recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'spaghetti',
      imageUrl: 'https://veganwithgusto.com/wp-content/uploads/2021/05/speedy-spaghetti-arrabbiata-1st-image.jpg',
      ingredients: ['French Fries', 'Pork Meat', 'Salad'],
    },
    {
      id: 'r2',
      title: 'Schnitzel',
      imageUrl: 'https://www.daringgourmet.com/wp-content/uploads/2018/01/Jagerschnitzel-12-cropped-edited-768x557.jpg',
      ingredients: ['spaghetti', 'carrots', 'sauce'],
    },
  ];
  constructor() { }

  getRecipes(): Recipe[] {
    return [...this.recipes]
  }

  getRecipe(recipeId: string) {
    // @ts-ignore
    return {
      ...this.recipes.find(recipe => {
        return recipe.id === recipeId
      })
    }
  }

  deleteRecipe(recipeId: string) {
    this.recipes = this.recipes.filter(recipe => {
      return recipe.id !== recipeId
    })
  }
}
