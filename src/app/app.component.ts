import { Component, ElementRef, ViewChild } from '@angular/core';
import videojs from './service/video-js-service'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  @ViewChild('videoElem', { static: true }) videoElem: ElementRef;

  player:videojs.Player;

  public go(){
    var elem = this.videoElem.nativeElement;
    this.player = videojs(elem);

    const videoSource = {
      src: 'https://sample-videos-zyrkp2nj.s3-eu-west-1.amazonaws.com/big-buck-bunny/hls/master-test-20210305.m3u8',
      mimeType: 'application/x-mpegurl'
    };
    this.player.src(videoSource);
    this.player.play();
  }
}
