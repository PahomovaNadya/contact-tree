import { Component } from '@angular/core';
import { TreeService } from './tree.servise'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TreeService]
})
export class AppComponent {
  title = 'Contact Tree';
  contacts: any[] = [];
  constructor(private treeService: TreeService) { }
  ngOnInit(){ 
    this.contacts = this.treeService.contacts
    console.log(this.contacts,"****** this.contacts *****");
  }

}