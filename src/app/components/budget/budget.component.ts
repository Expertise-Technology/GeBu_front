import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule, registerLocaleData } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { BudgetService } from '../../services/budget.service';
import { Budget } from '../../models/budget.model';
import { Expense } from '../../models/expense.model';
import { ExpenseService } from '../../services/expense.service';
import { Recipe } from '../../models/recipe.model';
import { RecipeService } from '../../services/recipe.service';
import { AccountService } from '../../services/account.service';
import { CenterService } from '../../services/center.service';
import { Account } from '../../models/account.model';
import bootstrap from '../../../main.server';
import { Mouvment } from '../../models/mouvment.model';
import { MouvmentService } from '../../services/mouvment.service';


@Component({
  selector: 'app-budget',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    RouterModule

  ],
  templateUrl: './budget.component.html',
  styleUrl: './budget.component.css'
})
export class BudgetComponent {

  centerId! : number;
  centerName! : string;
  budgets!: Budget[];
  expenses!: Expense[];

  totalExpense! : number;
  recipes!: Recipe[];
  totalRecipe! : number;

  amount!: number;
  accountId!: number;
  newMouvment: Mouvment = new Mouvment();
  listAccount! : Account[];

  newAccount: Account = new Account();

  modalData: any;
  currentDate: string = '';

  constructor(private budgetService: BudgetService,
    private accountService: AccountService,
    private expenseService: ExpenseService,
    private recipeService: RecipeService,
    private activationRoute: ActivatedRoute,
    private centerService: CenterService,
    private mouvmentService: MouvmentService,
    private router: Router) {


      const today = new Date();
      this.currentDate = today.toISOString().split('T')[0];

      this.budgetService.listBudgetsByCenter(this.activationRoute.snapshot.params["id"]).subscribe(budget =>  { this.budgets = budget,

        this.budgets.forEach(budget => {

          this.expenseService.listExpensesByBudget(budget.id).subscribe(expense =>  { budget.expense = expense,
            budget.totalExpense = expense.reduce((sum, element) => sum + element.amount, 0);
          });

          this.recipeService.listRecipesByBudget(budget.id).subscribe(recipe =>  { budget.recipe = recipe;
            budget.totalRecipe = recipe.reduce((sum, element) => sum + element.amount, 0);
          });
        });

       });

       this.accountService.accountCenter(this.activationRoute.snapshot.params["id"]).subscribe(account =>  {
        if (account != null){
          this.amount = account?.amount;
          this.accountId = account.id;
        }
       });

       this.centerService.consulterCenter(this.activationRoute.snapshot.params["id"]).subscribe(center => {
        this.centerId = center.id;
        this.centerName = center.name;
        this.newAccount.center = center;
       });

       this.accountService.listAccount().subscribe(account => {
        this.listAccount = account;
      });
  }

  // Delete Expense
  deleteExpense(expense: Expense) {
    let conf = confirm("Etes-vous sûr ? ");
    if (conf)
      this.expenseService.deleteExpense(expense.id).subscribe(() => {
        const id = expense.budget.center.id;
        const url = `/center/${id}`;
        window.location.href = url;
    });
  }

  // Delete recipe
  deleteRecipe(recipe: Recipe) {
    let conf = confirm("Etes-vous sûr ? ");
    if (conf)
      this.recipeService.deleteRecipe(recipe.id).subscribe(() => {
        const id = recipe.budget.center.id;
        const url = `/center/${id}`;
        window.location.href = url;
    });
  }

  addAccount(){
    this.accountService.addAccount(this.newAccount).subscribe(account => {
      const id = this.newAccount.center.id;
      const url = `/center/${id}`;
      window.location.href = url;
    });
  }

  openModal(data : any) {
    this.modalData = { ...data };
    const modalElement = document.getElementById('myModal');
    if (modalElement) {
      const modal = new (window as any).bootstrap.Modal(modalElement); // Utilisation de type d'assertion
      modal.show();
    }
  }

  addMouvment() {
    // Assurez-vous que `accountId` est défini et trouvé dans la liste des comptes
    this.newMouvment.account = this.listAccount.find(account => account.id == this.accountId)!;

    // Vérifiez que `accountId` a bien été trouvé
    if (this.newMouvment.account == null) {
      alert("Account not found!");
      return;
    }

    if (this.modalData as Recipe) {
      // Traitement pour les recettes
      this.newMouvment.libele = this.modalData.libelle;
      this.newMouvment.dateMv = new Date(this.currentDate);
      this.newMouvment.typeMv = "credit";
      this.newMouvment.amountMv = this.modalData.amount;

      this.modalData.cashed = true;

      // Mise à jour de la recette via le service
      this.recipeService.updateRecipe(this.modalData).subscribe(
        recipe => {
          console.log("Updated recipe:", this.modalData);
          alert("Updated recipe !");
        },
        error => {
          console.error("Error updating recipe:", error);
          alert("Error updating recipe:");
        }
      );

      // Enregistrement du mouvement via le service
    const id = this.centerId;
    this.mouvmentService.addMouvmentService(this.newMouvment).subscribe(
      mouvment => {
        // Redirection vers la page de centre après l'ajout du mouvement
        const url = `/center/${id}`;
        window.location.href = url;
      },
      error => {
        console.error("Error adding movement:", error);
      }
    );

    }

    if (this.modalData as Expense) {
      // Traitement pour les dépenses
      this.newMouvment.libele = this.modalData.budgetLine.description;
      this.newMouvment.dateMv = new Date(this.currentDate);
      this.newMouvment.typeMv = "debit";
      this.newMouvment.amountMv = this.modalData.amount;

      this.modalData.paid = true;

      // Mise à jour de la dépense via le service
      this.expenseService.updateExpense(this.modalData).subscribe(
        expense => {
          const id = this.modalData.budget.center.id;
          console.log("Updated expense:", this.modalData);
        },
        error => {
          console.error("Error updating expense:", error);
        }
      );

      // Enregistrement du mouvement via le service
    const id = this.centerId;
    this.mouvmentService.addMouvmentService(this.newMouvment).subscribe(
      mouvment => {
        // Redirection vers la page de centre après l'ajout du mouvement
        const url = `/center/${id}`;
        window.location.href = url;
      },
      error => {
        console.error("Error adding movement:", error);
      }
    );

    }

  }







  
  //creer un service global pour l'utiliser dans plusieurs components
  getFormattedAmount(amounty: number): string {
    const formatter = new Intl.NumberFormat('fr-FR', {
      style: 'currency',
      currency: 'XOF',
      currencyDisplay: 'code'
    });
    return formatter.format(amounty).replace('XOF', 'FCFA');
  }

  goToMouvments(pg : string, centerId: number): void {
    this.router.navigate([pg, centerId]).then(() => {
      window.location.reload();
    });
  }


}
