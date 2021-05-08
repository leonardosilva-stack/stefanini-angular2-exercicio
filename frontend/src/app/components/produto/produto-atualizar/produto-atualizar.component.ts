import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Produto } from './../produto.model';
import { ProdutoService } from './../produto.service';

@Component({
  selector: 'app-produto-atualizar',
  templateUrl: './produto-atualizar.component.html',
  styleUrls: ['./produto-atualizar.component.css']
})
export class ProdutoAtualizarComponent implements OnInit {
  produto!: Produto

  constructor(
    private produtoService: ProdutoService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("id");
    this.produtoService.lerPorId(id!).subscribe((produto) => {
      this.produto = produto;
    });
  }

  produtoAtualizado(): void {
    this.produtoService.atualizar(this.produto).subscribe(() => {
      this.produtoService.showMessage('Produto atualizado com sucesso!');
      this.router.navigate(['/produtos']);
    })
  }

  cancelar(): void {
    this.router.navigate(['/produtos']);
  }
}