import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class PlanetService {
	constructor(private http: Http) { }// URL to web API
	getPlanets() {
		return this.http.get('http://swapi.co/api/planets')
		.toPromise()
		.then(response => response.json())
	}
}