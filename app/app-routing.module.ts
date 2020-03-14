import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AdminComponent } from './admin/admin.component';
import { ImportDataComponent } from './admin/import-data/import-data.component';
import { ManageCompanyComponent } from './admin/manage-company/manage-company.component';
import { ManageExchangeComponent } from './admin/manage-exchange/manage-exchange.component';
import { UserComponent } from './user/user.component';
import { CompareCompanyComponent } from './user/compare-company/compare-company.component';
import { CompareSectorsComponent } from './user/compare-sectors/compare-sectors.component';
import { IposComponent } from './user/ipos/ipos.component';
import { UserlistComponent } from './userlist/userlist.component';
import { CompanylistComponent } from './admin/manage-company/companylist/companylist.component';
import { StockexchangelistComponent } from './admin/manage-exchange/stockexchangelist/stockexchangelist.component';
import { UpdatecompanyComponent } from './updatecompany/updatecompany.component';
import { SectorsComponent } from './admin/sectors/sectors.component';
import { SectorslistComponent } from './admin/sectors/sectorslist/sectorslist.component';
import { StockpriceComponent } from './admin/stockprice/stockprice.component';
import { StockpricelistComponent } from './admin/stockprice/stockpricelist/stockpricelist.component';
import { IpodetailslistComponent } from './admin/iposdetails/ipodetailslist/ipodetailslist.component';
import {  IposDetailsComponent } from './admin/iposdetails/iposdetails.component';


const routes: Routes = [{path:"navbar",component:NavbarComponent},
  {path:"", component:HomepageComponent},
  {path:"homepage", component:HomepageComponent},
  {path:"login", component:LoginComponent},
{path:"signup", component:SignupComponent},
{path:"admin", component:AdminComponent},
{path:"import-data", component:ImportDataComponent},
{path:"manage-company", component:ManageCompanyComponent},
{path:"manage-exchange", component:ManageExchangeComponent},
{path:"iposdetails", component:IposDetailsComponent},

{path:"user", component:UserComponent},
{path:"compare-company", component:CompareCompanyComponent},
{path:"compare-sectors", component:CompareSectorsComponent},
{path:"ipos", component:IposComponent},
{path:"userlist", component:UserlistComponent},
{path:"companylist", component:CompanylistComponent},
{path:"ipodetailslist", component:IpodetailslistComponent},
{path:"stockexchangelist", component:StockexchangelistComponent},
{path:"updatecompany", component:UpdatecompanyComponent},
{path:"sectors", component:SectorsComponent},
{path:"sectorslist", component:SectorslistComponent},
{path:"stockprice", component:StockpriceComponent},
{path:"stockpricelist", component:StockpricelistComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
