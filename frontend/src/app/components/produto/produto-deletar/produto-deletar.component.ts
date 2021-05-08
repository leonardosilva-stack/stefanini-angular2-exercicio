import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProdutoService } from './../produto.service';
import { Produto } from './../produto.model';

@Component({
  selector: 'app-produto-deletar',
  templateUrl: './produto-deletar.component.html',
  styleUrls: ['./produto-deletar.component.css']
})
export class ProdutoDeletarComponent implements OnInit {

  produto!: Produto

  constructor(private produtoService: ProdutoService, private router: Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.produtoService.lerPorId(id!).subscribe(produto =>{
      this.produto = produto
    })
  }

  produtoDeletado(): void {
    this.produtoService.deletar(this.produto.id!).subscribe(()=>{
      this.produtoService.showMessage('Produto excluido com sucesso!');
      this.router.navigate(['/produtos']);

    })
  }

  cancelar(): void {
    this.router.navigate(['/produtos']);
  }
}