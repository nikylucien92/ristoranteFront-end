import { Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { ServiceTableService } from 'src/app/src/app/service/service-table.service';
import { TavoloComponent } from '../tavolo/tavolo.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  serviceTables!: ServiceTableService;

  arrayTavoli!: TavoloComponent[];
  constructor(private router: Router, serviceTables: ServiceTableService) {
    this.serviceTables = serviceTables;
  }

  @Input() username !: string;
  //  @Output() alertPopup =new EventEmitter<string>();

  ngOnInit(): void {
    this.getAllTable();
  }
  /*
  popUp(){
    this.alertPopup.emit(this.username);
  }
  */

  public goToTables() {

    this.router.navigate(['app-tables']);
  }

  public goToBookings() {
    this.router.navigate(['app-bookings']);

  }

  public goToOrders() {
    this.router.navigate(['app-orders']);

  }
  getAllTable() {

    this.serviceTables.getTables().subscribe(data => {
      alert(JSON.stringify(data))
      console.log(data);

    });
  }
  

}
