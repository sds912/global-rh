import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-industry',
  templateUrl: './industry.component.html',
  styleUrls: ['./industry.component.scss']
})
export class IndustryComponent implements OnInit {

  constructor() { }

   industry =  [
      {
        "label":"E-commerce",
        "icon": "assets/images/industry/ecommerce.png"
      },
      {
        "label":"Education",
        "icon": "assets/images/industry/graduation.png"
      },
      {
        "label":"Fintech",
        "icon": "assets/images/industry/fintech.png"
      },
      {
        "label":"Technologie",
        "icon": "assets/images/industry/technology.png"
      },
      {
        "label":"Santé",
        "icon": "assets/images/industry/healthcare.png"
      },
      {
        "label":"Aviation",
        "icon": "assets/images/industry/fly.png"
      },
      {
        "label":"Energie",
        "icon": "assets/images/industry/energy.png"
      },
      {
        "label":"Média",
        "icon": "assets/images/industry/media.png"
      },
      {
        "label":"Crypto monnaies",
        "icon": "assets/images/industry/bitcoin.png"
      },
      {
        "label":"Télécomunication",
        "icon": "assets/images/industry/signal.png"
      },
      {
        "label":"Banque",
        "icon": "assets/images/industry/bank.png"
      },
      {
        "label":"Assurance",
        "icon": "assets/images/industry/assurance.png"
      }
    ];

  ngOnInit(): void {

  }

}
