import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  contactForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.contactForm = this.formBuilder.group(
      {
        name:    ["", Validators.required],
        email:   ["", Validators.required, Validators.email],
        message: ["", Validators.required, Validators.minLength(10)]
      }
    )
  }


  sendMessage(){

  }

}
