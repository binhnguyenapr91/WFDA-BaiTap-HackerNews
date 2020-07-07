import { Articles } from './mock-articles';
import { Article } from './article';
import { Injectable } from '@angular/core';
import {Observable,of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  getArticles(): Observable<Article[]>{
    return of(Articles);
  }
  constructor() { }
}
