import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

/*
export interface postType {
title: string;
content: string;
loveIts: number;
created_at: Date;
}
*/

export class AppComponent {
  title = 'openClassBlog';


  postsDefinition = [
    {
    title :'Premier Post',
    content : 'bla bla bla',
    loveIts : 1,
    created_at: new Date()
    },
    {
    title :'Post 2',
    content : 'ahahahah ahah ahah',
    loveIts : -1,
    created_at: new Date()
    },
    {
    title :'Encore un',
    content : 'il était une fois 1 2 3',
    loveIts : 0,
    created_at: new Date()
    }

  ];


}
