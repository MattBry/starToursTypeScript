import {Component} from "@angular/core";
import {NavController, Page} from 'ionic-angular';
import {ListPage} from '../list/list';

@Page({
  templateUrl: 'build/pages/log-in/log-in.html'
})
export class LoginPage {
  constructor(private nav: NavController) {
  	this.nav = nav;
  }
  signIn(event) {
     this.nav.push(ListPage);
  }
}
