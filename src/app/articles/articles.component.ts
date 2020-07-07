import { ArticleService } from './../article.service';
import { Article } from './../article';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {

  articles : Article[];
  selectedArticle : Article;
  constructor(private articleService : ArticleService) { }
  
  getArticles(): void{
     this.articleService.getArticles().subscribe(articles => this.articles = articles);
  }
  onSelected(article: Article): void{
    this.selectedArticle = article;
  }

  ngOnInit(): void {
    this.getArticles();
  }

}
