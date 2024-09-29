import { Routes } from '@angular/router';
import { BudgetComponent } from './components/budget/budget.component';
import { UpdateBudgetExpenseComponent } from './components/update-budget-expense/update-budget-expense.component';
import { AddBudgetExpenseComponent } from './components/add-budget-expense/add-budget-expense.component';
import { AddBudgetRecipeComponent } from './components/add-budget-recipe/add-budget-recipe.component';
import { AddBudgetComponent } from './components/add-budget/add-budget.component';
import { MouvmentComponent } from './components/mouvment/mouvment.component';
import { UpdateBudgetRecipeComponent } from './components/update-budget-recipe/update-budget-recipe.component';
import { AddCenterComponent } from './components/add-center/add-center.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { AddLigneBudgetComponent } from './components/add-ligne-budget/add-ligne-budget.component';
import { AddMouvmentComponent } from './components/add-mouvment/add-mouvment.component';

export const routes: Routes = [
  { path: 'center/:id', component: BudgetComponent },
  { path: 'addcenter', component: AddCenterComponent },
  { path: 'addligne', component: AddLigneBudgetComponent },
  { path: 'addmouvment/:id', component: AddMouvmentComponent },
  { path: 'update/expense/:id', component: UpdateBudgetExpenseComponent },
  { path: 'update/recipe/:id', component: UpdateBudgetRecipeComponent },
  { path: 'add/expense/:id', component: AddBudgetExpenseComponent },
  { path: 'add/recipe/:id', component: AddBudgetRecipeComponent },
  { path: 'add/budget/:id', component: AddBudgetComponent },
  { path: 'mouvment/:id', component: MouvmentComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'welcome', component: WelcomeComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];
