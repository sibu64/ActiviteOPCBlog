import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../model/post';

@Component({
  selector: 'app-post-list-item-component',
  templateUrl: './post-list-item-component.component.html',
  styleUrls: ['./post-list-item-component.component.css']
})
export class PostListItemComponentComponent implements OnInit {
  @Input() post: Post;
  constructor() { }
  ngOnInit() {
    console.log(this.post);
  }

  like() {
    ++this.post.loveIts;
  }

  dislike() {
    --this.post.loveIts;
  }


}
