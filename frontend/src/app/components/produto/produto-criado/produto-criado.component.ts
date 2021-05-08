import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Produto } from '../produto.model';
import { ProdutoService } from './../produto.service';

@Component({
  selector: 'app-produto-criado',
  templateUrl: './produto-criado.component.html',
  styleUrls: ['./produto-criado.component.css']
})
export class ProdutoCriadoComponent implements OnInit {

  produto: Produto = {
    nome: '',
    preco: null
  }

  constructor(private produtoService: ProdutoService, private router: Router) { }

  ngOnInit(): void {
  }
  
  produtoCriado(): void{
    this.produtoService.criar(this.produto).subscribe(
      ()=>{
        this.produtoService.showMessage('Produto criado com sucesso!');
        this.router.navigate(['/produtos']);
      })
    
  }

  cancelar(): void{
    this.router.navigate(['/produtos']);
  }
}