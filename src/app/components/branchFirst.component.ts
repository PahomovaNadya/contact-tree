import { Component, Input } from '@angular/core';

@Component({
  selector: 'branch-first',
  templateUrl: './branchFirst.component.html',
  styleUrls: ['./../app.component.css']
})
export class BranchFirstComponent {
  contactsBranchS: any[] = [];
  @Input() contactBranchFirst;
  
  openBranchToo() {
    if(typeof this.contactsBranchS !== 'undefined' ){
      if(this.contactsBranchS.length==0) {
        this.contactsBranchS = this.contactBranchFirst.contacts;
      } else {
        this.contactsBranchS = [];
      }
    }
  }
}