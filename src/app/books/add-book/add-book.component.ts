import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  @ViewChild('f', {static: true}) signUpForm: NgForm;
  book = {
    name: '',
    auhtor: '',
    email: '',
    price: '',
    comments: ''
  };

  constructor(private http: HttpClient) { }

  onSubmit() {
    this.book.name = this.signUpForm.value.name;
    this.book.auhtor = this.signUpForm.value.auhtor;
    this.book.email = this.signUpForm.value.email;
    this.book.price = this.signUpForm.value.price;
    this.book.comments = this.signUpForm.value.comments;
  }

  ngOnInit() {
  }

}
