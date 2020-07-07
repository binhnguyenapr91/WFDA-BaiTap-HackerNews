import { MessageService } from './../message-service.service';
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
  constructor(private articleService : ArticleService,private messageService:MessageService) { }
  
  getArticles(): void{
     this.articleService.getArticles().subscribe(articles => this.articles = articles);
  }
  onSelected(article: Article): void{
    this.messageService.addMessage(`Article Component: Selected article have id:${article.id}`);
    this.selectedArticle = article;
  }

 

  ngOnInit(): void {
    this.getArticles();
  }

}
