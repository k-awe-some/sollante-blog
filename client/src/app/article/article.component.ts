import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs";
import { Apollo } from "apollo-angular";

import ARTICLE_QUERY from "../apollo/queries/article/article";
import { environment } from "src/environments/environment";

@Component({
  selector: "app-article",
  templateUrl: "./article.component.html",
  styleUrls: ["./article.component.scss"],
})
export class ArticleComponent implements OnInit {
  article: any = {};
  loading = true;
  errors: any;
  environment = environment;

  private queryArticle: Subscription;

  constructor(private apollo: Apollo, private route: ActivatedRoute) {}

  ngOnInit() {
    this.queryArticle = this.apollo
      .watchQuery({
        query: ARTICLE_QUERY,
        variables: {
          id: this.route.snapshot.paramMap.get("id"),
        },
      })
      .valueChanges.subscribe((res: any) => {
        this.article = res.data.article;
        console.log(this.article);
        this.loading = res.loading;
        this.errors = res.errors;
      });
  }

  ngOnDestroy() {
    this.queryArticle.unsubscribe();
  }
}
