import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  
  menuVariable:boolean = true;
  menu_icon_variable:boolean = true;

  constructor() { }

  openMenu(){
    this.menuVariable =! this.menuVariable;
    console.log(this.menuVariable);
    this.menu_icon_variable =! this.menu_icon_variable;
  }

}
