import { SelectionModel } from '@angular/cdk/collections';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { PagarServiceService } from './pagar-service.service';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079},
  {position: 2, name: 'Helium', weight: 4.0026},
];

@Component({
  selector: 'app-pagar',
  templateUrl: './pagar.component.html',
  styleUrls: ['./pagar.component.css']
})
export class PagarComponent {
  selected = 'option2';
  banco = 'option2';
  displayedColumns: string[] = ['select', 'position', 'name', 'weight'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  selection = new SelectionModel<PeriodicElement>(true, []);

  formPago = new FormGroup({
    cedulaRifEmisor: new FormControl(),
    concepto: new FormControl(),
    identificadorExterno: new FormControl(),
    monto: new FormControl(),
    nombreEmisor: new FormControl(),
    ipOrigen: new FormControl(),
    terminal: new FormControl(),
  })

  constructor( private readonly pagarService: PagarServiceService){}

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource.data);
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: PeriodicElement): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }

  SendPagoMovilForm() {
    const cedulaRifEmisor = this.formPago.value.cedulaRifEmisor || ""
    const concepto = this.formPago.value.cedulaRifEmisor || ""
    const identificadorExterno = this.formPago.value.identificadorExterno || ""
    const monto = this.formPago.value.monto || ""
    const nombreEmisor = this.formPago.value.nombreEmisor || ""
    const ipOrigen = this.formPago.value.ipOrigen || ""
    const terminal = this.formPago.value.terminal || ""


    const data = {
      cedulaRifEmisor: cedulaRifEmisor,
      concepto: concepto,
      identificadorExterno: identificadorExterno,
      monto : monto,
      nombreEmisor: nombreEmisor,
      ipOrigen: ipOrigen,
      terminal: terminal
    };

    if (data.cedulaRifEmisor) {
      console.log(data);
      this.pagarService.SendPayment(data).subscribe({
        next: response => {
          console.log("Response received:", response);
        },
        error: err => {
          console.error("Error:", err);
          // Aquí puedes manejar el error.
        },
        complete: () => {
          console.log("Request completed");
          // Este callback se ejecutará cuando el Observable se complete.
        }
      });
    }
  }
}

