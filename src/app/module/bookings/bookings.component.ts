import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { PopupEditTableComponent } from '../popup-edit-table/popup-edit-table.component';
import { PopupEditBookingsComponent } from '../popup-edit-bookings/popup-edit-bookings.component';
import { PopupNewBookComponent } from '../popup-new-book/popup-new-book.component';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent implements OnInit {

  tavoloDaModificare! :number;
  dialog! :MatDialog;
  constructor(dialog :MatDialog) {
    this.dialog=dialog;
   }

  ngOnInit(): void {
  }

  openDialogEdit() : void
  {
    const dialogRef = this.dialog.open(PopupEditBookingsComponent, {
      width: '300px',
      height:'400px',
      data: {tavolo: this.tavoloDaModificare}
    });
  }


openNewBooking() : void
  {
    const dialogRef = this.dialog.open(PopupNewBookComponent, {
      width: '300px',
      height:'400px',
      data: {tavolo: this.tavoloDaModificare}
    });
  }


}
