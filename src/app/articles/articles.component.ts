import { Article } from './../article';
import { Component, OnInit } from '@angular/core';
import {Articles} from './../mock-articles'

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {
  articles = Articles;
  selectedArticle : Article;
  constructor() { }
  
  onSelected(article: Article): void{
    this.selectedArticle = article;
  }

  ngOnInit(): void {
  }

}
