import { Component, OnInit } from '@angular/core';
import { Post } from './model/post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  posts: Post[] = [];
  title = 'activite-OPC-blog';
  ngOnInit() {
    this.posts.push(new Post('Mon premier article', 'voici le premier contenu', 3, new Date()));
    this.posts.push(new Post('Mon deuxiéme article', 'voici le deuxiéme contenu', 0, new Date()));
    // tslint:disable-next-line:max-line-length
    this.posts.push(new Post('Encore un  article', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 4, new Date()));
  }
}

