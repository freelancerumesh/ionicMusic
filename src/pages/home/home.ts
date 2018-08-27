import { Component } from '@angular/core';
import { NavController, LoadingController, ActionSheetController } from 'ionic-angular';
import { MusicProvider } from '../../providers/musics/musics';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public allMusic = [];

  constructor(
    public navCtrl: NavController,
    private musicProvider:MusicProvider,
    public loadingController:LoadingController,
    private actionSheetController : ActionSheetController
  ) {
   
  }

  ionViewDidLoad(){
    let allMusicLoadingController = this.loadingController.create({
      content:"getting yor songs from server"
    });
    allMusicLoadingController.present();

    this.musicProvider.getMusic()
    .subscribe((musicList) => {
      allMusicLoadingController.dismiss();
      this.allMusic = musicList;
    });
  }

  shareSong(){
    let shareSongActionSheet = this.actionSheetController.create({
      title:"Share Song",
      buttons:[
        {
          text:"Facebook",
          icon:"logo-facebook"
        },
        {
          text:"Twitter",
          icon:"logo-twitter"
        },
        {
          text:"Share",
          icon:"logo-share"
        },
        {
          text:"Cancel",
          role:"destructive"
        }
      ]
    });
    shareSongActionSheet.present();
  }


}
