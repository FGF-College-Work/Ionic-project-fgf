import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DBMeter } from '@ionic-native/db-meter';
 
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	public subscription = new Array<any>();

  constructor(
  	public navCtrl: NavController,
  	private dbMeter : DBMeter
  ) {

  }

  getDBMeter(){
  	// Start listening
	this.subscription = this.dbMeter.start().subscribe(
  		data => console.log(data)
	);

  }




}
