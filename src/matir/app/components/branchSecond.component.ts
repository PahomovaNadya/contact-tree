import { Component, Input } from '@angular/core';

@Component({
  selector: 'branch-second',
  templateUrl: './branchSecond.component.html',
  styleUrls: ['./../app.component.css']
})
export class BranchSecondComponent {
  contactsBranchT: any[] = [];
  @Input() contactBranchSecond;
  
  openBranchThree() {
    if(typeof this.contactsBranchT !== 'undefined' ){
      if(this.contactsBranchT.length==0) {
        this.contactsBranchT = this.contactBranchSecond.contacts;
      } else {
        this.contactsBranchT = [];
      }
    }
  }
}