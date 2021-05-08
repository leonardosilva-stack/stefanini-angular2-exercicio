import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdutoAtualizarComponent } from './components/produto/produto-atualizar/produto-atualizar.component';
import { ProdutoCriadoComponent } from './components/produto/produto-criado/produto-criado.component';
import { ProdutoDeletarComponent } from './components/produto/produto-deletar/produto-deletar.component';
import { HomeComponent } from './views/home/home.component';
import { ProdutoComponent } from './views/produto/produto.component';

const routes: Routes = [
  {
  path: "",
  component: HomeComponent
  },
  {
    path:"produtos",
    component: ProdutoComponent
  },
  {
    path: "produtos/criado",
    component: ProdutoCriadoComponent
  },
  {
    path: "produtos/atualizar/:id",
    component: ProdutoAtualizarComponent
  },
  {
    path: "produtos/deletar/:id",
    component: ProdutoDeletarComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }