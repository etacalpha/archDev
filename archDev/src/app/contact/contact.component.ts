import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Contact} from "../models/contactForm";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;

  constructor(private formBuilder: FormBuilder,private http: HttpClient) {
    this.contactForm = this.createFormGroupWithBuilder(formBuilder);
  }

  createFormGroupWithBuilder(formBuilder: FormBuilder) {
    return formBuilder.group({
      Contact: formBuilder.group(new Contact()),
      firstName: '',
      lastName: '',
      company: '',
      email: '',
      text: ''
    });
  }

  private headers = new HttpHeaders({'Content-Type': 'application/json'});

  onSubmit() {
    // Make sure to create a deep copy of the form-model
    const result: Contact = Object.assign({}, this.contactForm.value);
    // Do useful stuff with the gathered data
    this.http.post('http://68.183.117.112:8080/api/email', result, {headers: this.headers}).subscribe((data) => {});
    console.log(result);
    this.revert();
  }

  revert() {
    // Resets to blank object
    this.contactForm.reset();

    // Resets to provided model
    this.contactForm.reset({ personalData: new Contact(), requestType: '', text: '' });
  }

  ngOnInit() {
  }



}
