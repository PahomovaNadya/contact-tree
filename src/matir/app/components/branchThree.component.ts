import { Component, Input } from '@angular/core';

@Component({
  selector: 'branch-three',
  templateUrl: './branchSecond.component.html',
  styleUrls: ['./../app.component.css']
})
export class BranchSecondComponent {
  contactsBranchF: any[] = [];
  @Input() contactBranchThree;
  
  openBranchThree() {
    if(typeof this.contactsBranchF !== 'undefined' ){
      if(this.contactsBranchF.length==0) {
        this.contactsBranchF = this.contactBranchThree.contacts;
      } else {
        this.contactsBranchF = [];
      }
    }
  }
}