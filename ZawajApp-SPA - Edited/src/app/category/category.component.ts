import { Component, OnInit } from '@angular/core';
import { MyServiceService } from '../my-service.service';
import { category } from '../category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  cat:category= new category(0,"UnKnown");

  constructor(private service:MyServiceService) { }

  ngOnInit(): void {
    this.service.sayHello("Category")
  }

  onSubmit() {
    console.log(this.cat);
  }

}
