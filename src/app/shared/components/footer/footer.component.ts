import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  datas: any[] = [
    {
      image: ""
    },
    {
      title: "FAQ",
      items: [
        {
          label: "Services de conseil"
        },
        {
          label: "Conditions générales"
        },
        {
          label: "Qui sommes nous ?"
        }
      ]
    },
    {
      title: "Partenariats offres",
      items: [
        {
          label: "Nous rejoindre",

        },
        {
          label: "Site corporate",

        },
        {
          label: "Salons Apec",

        }
      ]
    },
    {
      title: "Le groupe",
      items: [
        {
          label: "Candidat "
        },
        {
          label: "Recruteur"
        }
      ],
      button: ""
    }

  ];

  constructor() { }

  ngOnInit(): void {
  }

}
