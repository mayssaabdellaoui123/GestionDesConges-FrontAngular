import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SliderComponent } from './slider/slider.component';
import { ImageSliderComponent } from './image-slider/image-slider.component';
import { ContactComponent } from './contact/contact.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { ClientComponent } from './client/client.component';
import { DelivererComponent } from './deliverer/deliverer.component';
import { ManagerComponent } from './manager/manager.component';
import { httpInterceptorProviders } from './auth/auth-interceptor';
import { NavbarAuthoritiesComponent } from './navbar-authorities/navbar-authorities.component';
import { AccountInfoComponent } from './account-info/account-info.component';
import { AccountComponent } from './account/account.component';
import { VirtualVisitComponent } from './virtual-visit/virtual-visit.component';
import { EventsComponent } from './events/events.component';
import { ClothesComponent } from './clothes/clothes.component';
import { AccessoriesComponent } from './accessories/accessories.component';
import { FoodComponent } from './food/food.component';
import { ToolsComponent } from './tools/tools.component';
import { DonationsComponent } from './donations/donations.component';
import { ForumComponent } from './forum/forum.component';
import { AdvertisementsComponent } from './advertisements/advertisements.component';
import { ProductsComponent } from './products/products.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MemeComponent } from './meme/meme.component';
import { AccountsManagementComponent } from './accounts-management/accounts-management.component';
import { MyaccountadminComponent } from './myaccountadmin/myaccountadmin.component';
import { MyaccountdelivererComponent } from './myaccountdeliverer/myaccountdeliverer.component';
import { AccountsDashboardComponent } from './accounts-dashboard/accounts-dashboard.component';
import { ChartsModule } from 'ng2-charts';
import { EmployeeComponent } from './employee/employee.component';
import { DepartmentComponent } from './department/department.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Header1Component } from './header1/header1.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { AdminManagerComponent } from './admin-manager/admin-manager.component';
import { HistoriqueComponent } from './historique/historique.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    SliderComponent,
    ImageSliderComponent,
    ContactComponent,
    CartComponent,
    CheckoutComponent,
    RegisterComponent,
    LoginComponent,
    AdminComponent,
    ClientComponent,
    DelivererComponent,
    ManagerComponent,
    NavbarAuthoritiesComponent,
    AccountInfoComponent,
    AccountComponent,
    VirtualVisitComponent,
    EventsComponent,
    ClothesComponent,
    AccessoriesComponent,
    FoodComponent,
    ToolsComponent,
    DonationsComponent,
    ForumComponent,
    AdvertisementsComponent,
    ProductsComponent,
    DashboardComponent,
    MemeComponent,
    AccountsManagementComponent,
    MyaccountadminComponent,
    MyaccountdelivererComponent,
    AccountsDashboardComponent,
    EmployeeComponent,
    DepartmentComponent,
    Header1Component,
    AdminManagerComponent,
    HistoriqueComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ChartsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
