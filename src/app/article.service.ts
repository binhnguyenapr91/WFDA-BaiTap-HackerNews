import { MessageService } from './message-service.service';
import { Articles } from './mock-articles';
import { Article } from './article';
import { Injectable } from '@angular/core';
import {Observable,of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  getArticles(): Observable<Article[]>{
    this.messageService.addMessage("Article Service: fetched all articles");
    return of(Articles);
  }
  constructor(private messageService : MessageService) { }
}
