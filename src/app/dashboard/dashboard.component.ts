import { ArticleService } from './../article.service';
import { Article } from './../article';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  articles : Article[]=[];
  constructor(private articleService : ArticleService) { }

  ngOnInit(): void {
    this.getArticles();
  }
  getArticles():void{
    this.articleService.getArticles().subscribe(articles => this.articles = articles.slice(0,3));
  }
}
