import { Component, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { Apollo } from "apollo-angular";

import ARTICLES_QUERY from "../apollo/queries/articles/articles";
import { environment } from "src/environments/environment";

@Component({
  selector: "app-articles",
  templateUrl: "./articles.component.html",
  styleUrls: ["./articles.component.scss"],
})
export class ArticlesComponent implements OnInit {
  articles: any[] = [];
  loading = true;
  errors: any;
  environment = environment;

  private queryArticles: Subscription;

  constructor(private apollo: Apollo) {}

  ngOnInit(): void {
    this.queryArticles = this.apollo
      .watchQuery({
        query: ARTICLES_QUERY,
      })
      .valueChanges.subscribe((res: any) => {
        this.articles = res.data.articles;
        console.log(this.articles);

        this.loading = res.loading;
        this.errors = res.errors;
      });
  }

  ngOnDestroy() {
    this.queryArticles.unsubscribe();
  }
}
