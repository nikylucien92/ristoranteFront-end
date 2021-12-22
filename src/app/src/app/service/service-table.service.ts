import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TavoloComponent } from 'src/app/module/tavolo/tavolo.component';

@Injectable()
export class ServiceTableService {

  http: HttpClient;

  private url = "http://localhost:4200";

  httpOptions = {
    headers: new HttpHeaders({
     // 'Content-Type':  'application/json'
    responseType : 'text' as 'json'
    }),

  };

  
  constructor(http: HttpClient) {
    this.http = http;
  }

  getTables() {

    return this.http.get(this.url, this.httpOptions);
  }

  handleError(handleError: any): import("rxjs").OperatorFunction<unknown, TavoloComponent> {
    throw new Error('Metodo non implementato.');
  }
  getTableById(cod_tavolo: any): Observable<TavoloComponent> {
    return this.http.get(this.url + cod_tavolo, this.httpOptions).pipe(
      retry(2),
      catchError(this.handleError)
    )
  }
  /*
   // DELETE TAVOLO
  DeleteTable(cod_tavolo: number){
    return this.http.delete<TavoloComponent>(this.url  + cod_tavolo, this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )

      // PUT
  UpdateBug(cod_tavolo, tavoloAggiornato): Observable<TavoloComponent> {
    return this.http.put<TavoloComponent>(this.url + cod_tavolo, JSON.stringify(tavoloAggiornato), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.errorHandl)
    )
  }
  }*/ 
  
  addTable(newTavolo: TavoloComponent) :Observable<TavoloComponent> {
    return this.http.post<TavoloComponent>(
      this.url,JSON.stringify(newTavolo),this.httpOptions
    ).pipe(
      catchError(this.handleError(newTavolo))
      
    );
  }

}

//
function catchError(handleError: any): import("rxjs").OperatorFunction<unknown, TavoloComponent> {
  throw new Error('Function not implemented.');
}

function retry(arg0: number): import("rxjs").OperatorFunction<Object, unknown> {
  throw new Error('Function not implemented.');
}

