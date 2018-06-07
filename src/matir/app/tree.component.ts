import { Component, Input } from '@angular/core';
import { AppComponent } from './app.component';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./app.component.css']
})
export class TreeComponent {
  contactsBranchF: any[] = [];
    @Input() contactFirst;
    openBranch(){
      if(typeof this.contactsBranchF !== 'undefined' ){
        if(this.contactsBranchF.length==0) {
          this.contactsBranchF = this.contactFirst.contacts;
        } else {
          this.contactsBranchF = [];
        }
      }
    }
}