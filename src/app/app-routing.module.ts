import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccessoriesComponent } from './accessories/accessories.component';
import { AccountInfoComponent } from './account-info/account-info.component';
import { AccountComponent } from './account/account.component';
import { AccountsManagementComponent } from './accounts-management/accounts-management.component';
import { AdminManagerComponent } from './admin-manager/admin-manager.component';
import { AdminComponent } from './admin/admin.component';
import { AdvertisementsComponent } from './advertisements/advertisements.component';
import { ClientComponent } from './client/client.component';
import { ClothesComponent } from './clothes/clothes.component';
import { ContactComponent } from './contact/contact.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DelivererComponent } from './deliverer/deliverer.component';
import { DepartmentComponent } from './department/department.component';
import { DonationsComponent } from './donations/donations.component';
import { EmployeeComponent } from './employee/employee.component';
import { EventsComponent } from './events/events.component';
import { FoodComponent } from './food/food.component';
import { ForumComponent } from './forum/forum.component';
import { Header1Component } from './header1/header1.component';
import { HistoriqueComponent } from './historique/historique.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ManagerComponent } from './manager/manager.component';
import { MemeComponent } from './meme/meme.component';
import { ProductsComponent } from './products/products.component';
import { RegisterComponent } from './register/register.component';
import { ToolsComponent } from './tools/tools.component';
import { VirtualVisitComponent } from './virtual-visit/virtual-visit.component';
import { DemandeCongeComponent } from './demande-conge/demande-conge.component'
import { DemandeCongeChefComponent } from './demande-conge-chef/demande-conge-chef.component';



const routes: Routes = [ 
  {
    path :'accountsmanag', 
    component : AccountsManagementComponent
  },
  {
    path :'meme', 
    component : MemeComponent
  },
  {
    path :'dashboard', 
    component : DashboardComponent
  },
  {
    path :'products', 
    component : ProductsComponent
  },
  {
    path :'account', 
    component : AccountComponent
  },
  {
    path :'ads', 
    component : AdvertisementsComponent
  },
  {
    path :'contact', 
    component : ContactComponent
  },
  {
    path: 'clothes',
    component: ClothesComponent
  },
  {
    path: 'tools',
    component: ToolsComponent
  },
  {
    path: 'accessories',
    component: AccessoriesComponent
  },
  {
    path: 'food',
    component: FoodComponent
  },
  {
    path: 'donations',
    component: DonationsComponent
  },
  {
    path: 'events',
    component: EventsComponent
  },
{
  path: 'virtualvisit',
  component: VirtualVisitComponent
},
{
    path: 'forum',
    component: ForumComponent
},  
{
  path: 'home',
  component: HomeComponent
},
{
  path: 'client',
  component: ClientComponent
},
{
  path: 'accountsmanag/deliverer',
  component: DelivererComponent
},
{
  path: 'accountsmanag/admin',
  component: AdminComponent
},
{
  path: 'accountsmanag/manager',
  component: ManagerComponent
},
{
  path: 'auth/login',
  component: LoginComponent
},
{
  path: 'signup',
  component: RegisterComponent
},
{
  path: 'employee',
  component: EmployeeComponent
},
{
  path: 'department',
  component: DepartmentComponent
},
{
  path: 'adminManager',
  component: AdminManagerComponent
}
,
{
  path: 'navbar',
  component: Header1Component
}
,
{
  path: 'historique',
  component: HistoriqueComponent
}
,
{
  path: 'demandeConge',
  component: DemandeCongeComponent
}
,
{
  path: 'demandeCongechef',
  component: DemandeCongeChefComponent
}
,


{
  path: '',
  redirectTo: 'home',
  pathMatch: 'full'
},

{path: '**', component: MemeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
