import { Component, OnInit } from '@angular/core';
import { ProdutoService } from './../produto.service';
import { Produto } from './../produto.model';

@Component({
  selector: 'app-produto-leitura',
  templateUrl: './produto-leitura.component.html',
  styleUrls: ['./produto-leitura.component.css']
})
export class ProdutoLeituraComponent implements OnInit {

  produtos!: Produto[] 
  displayedColumns = ['id','nome','preco', 'acao']

  constructor(private produtoService: ProdutoService) { }

  ngOnInit(): void {
    this.produtoService.ler().subscribe(produtos =>{
      this.produtos = produtos;
      console.log(produtos);
    })
  }
}