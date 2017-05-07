import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TextToSpeech } from '@ionic-native/text-to-speech';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  text: string;

  constructor(public navCtrl: NavController, private tts: TextToSpeech) {

  }
  async talk():Promise<any>{
    try{
      await this.tts.speak(this.text);
      console.log("sucess talk");
    }
    catch(e){

    }
  }

}
