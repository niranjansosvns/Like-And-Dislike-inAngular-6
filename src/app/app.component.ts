// import component decorator
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
// title to this app.
  title = 'my-LikesDislikes-app';
// declare variable for like and dislike counter
  likeCount : number = 0;
  dislikeCount : number = 0;
  // constructor to initialize the variable
  constructor() { }
 // lifecycle hook to execute the things post component get created
  ngOnInit() {
  }
// like counter
 onClickLikeCount(): void {
    this.likeCount++;
}

// dislike counter
  onClickDislikeCount(): void {
    this.dislikeCount++;
    // like counter check to decrease the value corresponding to dislike
    if(this.likeCount > 0) {
    	this.likeCount--;
    }
 }
  
}


