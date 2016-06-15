import {Page, NavController, NavParams} from 'ionic-angular';
import {ItemDetailsPage} from '../item-details/item-details';
import {PlanetService} from '../../services/planet.service.ts';

@Page({
  templateUrl: 'build/pages/list/list.html'
})
export class ListPage {
  selectedItem: any;
  planets: any;
  icons: string[];
  items: Array<{title: string, note: string, icon: string}>;
  providers: [PlanetService];
  constructor(private nav: NavController, public planetService: PlanetService) {
    // If we navigated to this page, we will have an item available as a nav param
    this.planetService = planetService;
    this.planets = [];
    this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
    'american-football', 'boat', 'bluetooth', 'build'];

    this.items = [];
    for(let i = 1; i < 11; i++) {
      this.items.push({
        title: 'Item ' + i,
        note: 'This is item #' + i,
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
    }
  }

  itemTapped(event, item) {
    this.nav.push(ItemDetailsPage, {
      item: item
    });
  }
  ngOnInit(){
    console.log(this.planetService.getPlanets());
    this.planetService.getPlanets().then(response => this.planets = response.results);
  }
}
