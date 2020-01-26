import {Action} from '@ngrx/store';
import {Recipe} from '../recipe.model';

export const FETCH_RECIPES = '[Recipes] Fetch Recipes';
export const SET_RECIPES = '[Recipes] Set Recipes';
export const ADD_RECIPE = '[Recipes] Add Recipe';
export const UPDATE_RECIPE = '[Recipes] Update Recipe';
export const DELETE_RECIPE = '[Recipes] Delete Recipe';
export const STORE_RECIPES = '[Recipes] Store Recipes';

export class AddRecipe implements Action {
  readonly type: string = ADD_RECIPE;
  constructor(public payload: Recipe) {
  }
}

export class UpdateRecipe implements Action {
  readonly type: string = UPDATE_RECIPE;
  constructor(public payload: {index: number, recipe: Recipe}) {
  }
}
export class DeleteRecipe implements Action {
  readonly type: string = DELETE_RECIPE;
  constructor(public payload: number) {
  }
}


export class FetchRecipes implements Action {
  readonly type: string = FETCH_RECIPES;
  payload: any = null;
}

export class SetRecipes implements Action {
  readonly type: string = SET_RECIPES;

  constructor(public payload: Recipe[]) {
  }
}

export class StoreRecipes implements Action {
  readonly type: string = STORE_RECIPES;
  payload: any = null;
}


export type RecipesActions =
  | AddRecipe
  | DeleteRecipe
  | FetchRecipes
  | SetRecipes
  | StoreRecipes
  | UpdateRecipe
  ;
