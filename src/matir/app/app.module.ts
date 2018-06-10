import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TreeComponent } from './tree.component';
import { BranchFirstComponent } from './components/branchFirst.component';
import { BranchSecondComponent } from './components/branchSecond.component';

@NgModule({
  declarations: [
    AppComponent,
    TreeComponent,
    BranchFirstComponent,
    BranchSecondComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
