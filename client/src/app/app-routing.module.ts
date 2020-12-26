import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { ArticlesComponent } from "./articles/articles.component";
import { ArticleComponent } from "./article/article.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "blog",
    pathMatch: "full",
  },
  { path: "blog", component: ArticlesComponent },
  { path: "article/:id", component: ArticleComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
