import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

  data: any[] = [
    {
      title: "Ne ratez aucune offres",
      desc: "Soyez alerté par email dès qu’une nouvelle offre d’emploi correspond à votre profil",
      icon: "fa fa-envelope-open "
    },
    {
      title: "Gagnez du temps",
      desc: " GRH regroupe pour vous toutes les offres du marché, quel que soit le  secteur ou le type de poste que vous visez",
      icon: "fa fa-clock-o"
    },
    {
      title: "Chercher plus",
      desc: "Vous avez un CV ? Grâce à son analyse,nous trouvons pour vous les offres d’emploi qui correspondent à votre profil",
      icon: "fa fa-search"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
