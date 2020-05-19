import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  myReactForm = new FormGroup({
    name:new FormControl(''),
    age: new FormControl(''),
    address: new FormControl(''),
    job: new FormControl('')
  });
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.myReactForm.value);
  }

}
