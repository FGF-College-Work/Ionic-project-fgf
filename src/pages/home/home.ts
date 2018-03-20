import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { DBMeter } from '@ionic-native/db-meter';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  subscription: any;
  

  constructor(
  	public navCtrl: NavController,
    private dbMeter : DBMeter
    
  ) {

    

  }

  
  startDBMeter(){
    // Start listening
      let subscription = this.dbMeter.start().subscribe(
        data => console.log(data)
      );   
	  

  }

  stopDBMeter(){
    // Stop listening
    this.subscription.unsubscribe();
  }

  listingDBMeter(){
    // Check if we are listening
    this.dbMeter.isListening().then(
      (isListening: boolean) => console.log(isListening)
    );
  }

  deleteDBMeter(){
    // Delete DBMeter instance from memory
    this.dbMeter.delete().then(
      () => console.log('Deleted DB Meter instance'),
      error => console.log('Error occurred while deleting DB Meter instance')
    );
  }



}
