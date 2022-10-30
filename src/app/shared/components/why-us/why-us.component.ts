import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-why-us',
  templateUrl: './why-us.component.html',
  styleUrls: ['./why-us.component.scss']
})
export class WhyUsComponent implements OnInit {

  constructor() { }

  data = [
    {
      title: "Simple",
      desc: "Notre platefrome est facile à utiliser \n et nécessite aucun installation.",
      icon: "assets/images/simple.png"
    },
    {
      title: "Personnalisé",
      desc: "Nous vous proposons une platefrome \n qui s'adapte à vos besoin. ",
      icon: "assets/images/personnalise.png"
    },
    {
      title: "Flexible",
      desc: "Notre platefrome est évolutive et vous \n pouvez l'utiliser sans aucune restriction.",
      icon: "assets/images/flex.png"
    }
  ]

  ngOnInit(): void {
  }

}
