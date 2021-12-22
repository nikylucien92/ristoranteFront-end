import { MatDialog } from '@angular/material/dialog';
import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-popup-aggiungi-table',
  templateUrl: './popup-aggiungi-table.component.html',
  styleUrls: ['./popup-aggiungi-table.component.css']
})
export class PopupAggiungiTableComponent implements OnInit {
  dialog!: MatDialog;
  @ViewChild('divAdd') div !: ElementRef ;
  display='block'; //default Variable

  constructor(  private renderer: Renderer2) { }

  ngOnInit(): void {
  }


  onNoClick(): void {

  }
  addTable()
  {
    const div : HTMLParagraphElement=this.renderer.createElement('div');
    div.innerHTML="aggiunta";
    this.renderer.appendChild(this.div.nativeElement, div)

  }

  closeModalDialog(){
    this.display='none'; //set none css after close dialog
   }

}
