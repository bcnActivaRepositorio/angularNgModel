import { Component } from '@angular/core';

@Component({
  selector: 'pr-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Articles';
  art = {
    code: null,
    description: null,
    price: null
  };
  articles = [
    {code: 1, description: 'tatos', price: 10.55},
    {code: 2, description: 'apples', price: 12.10},
    {code: 3, description: 'melon', price: 52.30},
    {code: 4, description: 'onions', price: 10.55},
    {code: 5, description: 'butternut squash', price: 20.55},
  ];
  register = (): boolean => this.articles.length > 0;
  // CRUD
  // DELETE
   deleteMe(art: any): void {
     // iterate, find and destroy
     // tslint:disable-next-line: prefer-for-of
     for ( let x = 0; x < this.articles.length; x++){
       if (this.articles[x].code === art.code){
         this.articles.splice(x, 1);
         return;
       }
     }
   }
   // addme
   aggregateMe(): void {
     // tslint:disable-next-line: prefer-for-of
     for (let x = 0; x < this.articles.length; x++){
       if ( this.articles[x].code === this.art.code){
         console.log('Already in the database');
         return;
       }
       this.articles.push({
                          code: this.art.code,
                          description: this.art.description,
                          price: this.art.price
                         });

       this.art.code        = null;
       this.art.description = null;
       this.art.price       = null;
     }
   }
   // read
   readMe(art: any): void {
    this.art.code        = art.code;
    this.art.description = art.description;
    this.art.price       = art.price;
   }
// update
updateMe(): void {
  let article: any;
  for (article of this.articles){
   if (article.price === this.art.code) {
     article.description = this.art.description;
     article.price = this.art.price;
     return;
   }
   console.log(' There is no such code in the database');
 }
}
}

