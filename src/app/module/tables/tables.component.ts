import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ServiceTableService } from 'src/app/src/app/service/service-table.service';
import { PopupAggiungiTableComponent } from '../popup-aggiungi-table/popup-aggiungi-table.component';
import { PopupEditTableComponent } from '../popup-edit-table/popup-edit-table.component';
import { TavoloComponent } from '../tavolo/tavolo.component';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent implements OnInit {
  serviceTables!: ServiceTableService;
  tables: TavoloComponent[] = [];
  public formTavolo!: FormGroup;
  nuovoTavolo! :TavoloComponent;
  arr:any;
  tavoloAggiunto!: number;

  constructor(public dialog: MatDialog, serviceTables: ServiceTableService) {
    this.serviceTables = serviceTables;
  }

  @ViewChild('tavolo1') private tavolo1 !: ElementRef;
  @ViewChild('tavolo2') private tavolo2 !: ElementRef;
  @ViewChild('tavolo3') private tavolo3 !: ElementRef;


  ngOnInit(): void {
    this.buildForm();
  }
  public buildForm() {
    this.formTavolo = new FormGroup({
      cod_tavolo: new FormControl('', [Validators.required]),
      posti_occupati: new FormControl('', [Validators.required])
        });
  }

  aggiungiTavolo() {
    return this.serviceTables.addTable(this.nuovoTavolo)
       .subscribe((response: any) => {
         return this.arr.push(response);
       });
   }
  
  openDialog(): void {
    const dialogRef = this.dialog.open(PopupAggiungiTableComponent, {
      width: '300px',
      height: '400px',
      data: { tavolo: this.tavoloAggiunto }
    });
  }

  openEditTable() {
    const dialogEdit = this.dialog.open(PopupEditTableComponent, {
      width: '300px',
      height: '400px',
      data: { tavolo: this.tavoloAggiunto }
    });
  }


  removeTavolo1(): void {

    this.tavolo1.nativeElement.remove();

  }

  removeTavolo2(): void {

    this.tavolo2.nativeElement.remove();

  }

  removeTavolo3(): void {

    this.tavolo3.nativeElement.remove();

  }


 

  /**
   * deleteSmartphone(id: any, smartphone: Smartphone): Observable<Smartphone> {
    return this.http.delete<Smartphone>(localUrl + id, httpOptions)
      .pipe(
        catchError(this.handleError('addSmartphone', smartphone))
      );
  }
  
  updateSmartphone(id: any) {
   this.api
     .updateSmartphone(id, this.postdata)
     .subscribe(resp => {
       return this.spresp.push(resp);
     });
  }
   */

}
