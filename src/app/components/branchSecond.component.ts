import { Component, Input } from '@angular/core';

@Component({
  selector: 'branch-second',
  templateUrl: './branchSecond.component.html',
  styleUrls: ['./../app.component.css']
})
export class BranchSecondComponent {
  @Input() contactBranchSecond;
}