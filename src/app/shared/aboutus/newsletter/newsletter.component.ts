import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.scss']
})
export class NewsletterComponent implements OnInit {
  letterForm!: FormGroup

newletter:any[]=[
  {
    title: "S'INSCRIRE AUX NEWSLETTERS",
    message: "Restez informé,",
    input: "",
    button: ""
  },
  
]
sendMesssage: any;
  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.letterForm = this.formBuilder.group(
      {
        email:["", Validators.required, Validators.email]
      }
    )

    
  }
 

}

