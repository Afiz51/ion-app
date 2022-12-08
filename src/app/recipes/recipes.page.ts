import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {
  recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'spaghetti',
      imageUrl: 'https://veganwithgusto.com/wp-content/uploads/2021/05/speedy-spaghetti-arrabbiata-1st-image.jpg',
      ingredients: ['French Fries', 'Pork Meat', 'Salad'],
    },
    {
      id: 'r2',
      title: 'Schnitzel',
      imageUrl: 'https://therecipecritic.com/wp-content/uploads/2020/10/pork-schnitzel-recipe-3.jpg',
      ingredients: ['spaghetti', 'carrots', 'sauce'],
    },
  ];

  constructor() {}

  ngOnInit() {}
}
