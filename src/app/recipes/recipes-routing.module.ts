import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecipesPage } from './recipes.page';

const routes: Routes = [
  {
    path: '',
    component: RecipesPage,
  },
  {
    path: 'recipe-detail',
    loadChildren: () =>
      import('./recipe-detail/recipe-detail.module').then(
        (m) => m.RecipeDetailPageModule
      ),
  },
  {
    path: 'recipe-item',
    loadChildren: () => import('./recipe-item/recipe-item.module').then( m => m.RecipeItemPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecipesPageRoutingModule {}
