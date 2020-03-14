import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';   
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { ImportDataComponent } from './admin/import-data/import-data.component';
import { ManageCompanyComponent } from './admin/manage-company/manage-company.component';
import { ManageExchangeComponent } from './admin/manage-exchange/manage-exchange.component';
import { CompareCompanyComponent } from './user/compare-company/compare-company.component';
import { CompareSectorsComponent } from './user/compare-sectors/compare-sectors.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserlistComponent } from "./userlist/userlist.component";
import {DataTablesModule} from 'angular-datatables';
import { CompanylistComponent } from './admin/manage-company/companylist/companylist.component';
import { StockexchangelistComponent } from './admin/manage-exchange/stockexchangelist/stockexchangelist.component';
import { UpdatecompanyComponent } from './updatecompany/updatecompany.component';
import { SectorsComponent } from './admin/sectors/sectors.component';
import { StockpriceComponent } from './admin/stockprice/stockprice.component';
import { SectorslistComponent } from './admin/sectors/sectorslist/sectorslist.component';
import { StockpricelistComponent } from './admin/stockprice/stockpricelist/stockpricelist.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { HighchartsService } from './user/compare-company/HighchartsService.service';
import { IpodetailslistComponent } from './admin/iposdetails/ipodetailslist/ipodetailslist.component';
import { IposDetailsComponent } from './admin/iposdetails/iposdetails.component';
import { IposComponent } from './user/ipos/ipos.component';
@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    LoginComponent,
    SignupComponent,
    NavbarComponent,
    AdminComponent,
    UserComponent,
    ImportDataComponent,
    IpodetailslistComponent,
    IposDetailsComponent,
    ManageCompanyComponent,
    ManageExchangeComponent,
    CompareCompanyComponent,
    CompareSectorsComponent,

    UserlistComponent,
    CompanylistComponent,
    StockexchangelistComponent,
    UpdatecompanyComponent,
    SectorsComponent,
    StockpriceComponent,
    SectorslistComponent,
    StockpricelistComponent,
    IposComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,  
    ReactiveFormsModule,
    HttpClientModule,  
    DataTablesModule,
    HighchartsChartModule,
  ],
  providers: [HighchartsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
