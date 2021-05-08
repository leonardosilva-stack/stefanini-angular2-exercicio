import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EMPTY, Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators'
import { Produto } from './produto.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  private readonly API = `${environment.API}produtos`

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string, isError: boolean = false): void{
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ['msg-error'] : ['msg-sucesso']
    })
  }

  criar(produto: Produto): Observable<Produto>{
    return this.http.post<Produto>(this.API, produto).pipe(
      map((obj) => obj),
      catchError(e => this.trataError(e))
    );
  }

  ler(): Observable<Produto[]>{
    return this.http.get<Produto[]>(this.API).pipe(
      map((obj) => obj),
      catchError(e => this.trataError(e))
    );
  }

  lerPorId(id: string): Observable<Produto>{
    return this.http.get<Produto>(`${this.API}/${id}`).pipe(
      map((obj) => obj),
      catchError(e => this.trataError(e))
    );
  }

  atualizar(produto: Produto): Observable<Produto>{
    return this.http.put<Produto>(`${this.API}/${produto.id}`,produto).pipe(
      map((obj) => obj),
      catchError(e => this.trataError(e))
    );
  }

  deletar(id: number): Observable<Produto>{
    return this.http.delete<Produto>(`${this.API}/${id}`).pipe(
      map((obj) => obj),
      catchError(e => this.trataError(e))
    );
  }

  trataError(e: any): Observable<any>{
    this.showMessage("Ocorreu um erro!", true)
    return EMPTY
  }
}
