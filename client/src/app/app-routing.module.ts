import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { ArticlesComponent } from "./articles/articles.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "blog",
    pathMatch: "full",
  },
  { path: "blog", component: ArticlesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
