import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  optionList: string[] = [];
  selectedValue: string = "Select an Option";
  isOpen: boolean = false;
  constructor() {
    for (let i = 1; i < 10; i++) {
      this.optionList.push("Option " + i);
    }
  }

  onSelection(value: any) {
    console.log(value);
    this.selectedValue = value;
  }

  toggleDropdown() {
    this.isOpen = !this.isOpen
  }

}
