import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-form',
  templateUrl: './child-form.component.html',
  styleUrls: ['./child-form.component.scss']
})
export class ChildFormComponent implements OnInit {

  submit1 = "Add";
  submit2 = "Edit";
  submit3 = "Delete";
  constructor() { }

  ngOnInit(): void {
  }

  submit() {
    console.log("submit Run ： formMain");
    // return false;
  }

  submitParent() {
    console.log("submitParnet Run ： formMain");
    // return false;
  }

  submitChild(submitString: string) {
    console.log("submitChild Run ：" + submitString);
    // this.submitParent();
    // return false;
  }


}
