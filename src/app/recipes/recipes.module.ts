import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecipesPageRoutingModule } from './recipes-routing.module';

import { RecipesPage } from './recipes.page';
import {RecipeItemPageModule} from "./recipe-item/recipe-item.module";

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, RecipesPageRoutingModule, RecipeItemPageModule],
  declarations: [RecipesPage],
})
export class RecipesPageModule {}
