import { Injectable } from '@angular/core';
import { Http, Response, Headers, URLSearchParams, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import { Product } from './products'
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Article } from './article';

@Injectable()
export class ArticleService {
    //URL for CRUD operations
	articleUrl = "http://localhost:3000/products";
	//Create constructor to get Http instance
	constructor(private http:Http) { 
	}
	//Fetch all articles
    getAllArticles(): Observable<Product[]> {
        return this.http.get(this.articleUrl)
		   		.map(this.extractData)
		        .catch(this.handleError);

    }
	//Fetch article by id
    getArticleById(articleId: string): Observable<Product> {
		let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
		let options = new RequestOptions({ headers: cpHeaders });
		console.log(this.articleUrl +"/"+ articleId);
		return this.http.get(this.articleUrl +"/"+ articleId)
			   .map(this.extractData)
			   .catch(this.handleError);
    }	
	//Update article
    updateArticle(product: Product):Observable<number> {
	    let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: cpHeaders });
        return this.http.put(this.articleUrl +"/"+ product.SSN, product, options)
               .map(success => success.status)
               .catch(this.handleError);
    }
	
	private extractData(res: Response) {
	    let body = res.json();
        return body;
    }
    private handleError (error: Response | any) {
		console.error(error.message || error);
		return Observable.throw(error.status);
    }
}