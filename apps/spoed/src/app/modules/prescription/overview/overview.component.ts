import { Component, OnInit } from '@angular/core';
import { PrescriptionService } from '../../../data/prescription/prescription.service';
import {
  Prescription,
  PrescriptionBody,
  PrescriptionUnit,
} from '../../../models/prescription.model';
import { MatDialog } from "@angular/material/dialog";
import { PrescriptionComponent } from "../prescription/prescription.component";

@Component({
  selector: 'spoed-epd-use-case-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css'],
})
export class OverviewComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'description', 'quantity', 'unit'];
  prescriptions?: Prescription[];
  constructor(private readonly prescriptionService: PrescriptionService, private dialog: MatDialog) {}

  async ngOnInit(): Promise<void> {
    this.fetchDescriptions();
  }

  fetchDescriptions(): void{
    this.prescriptionService.getPrescriptions().subscribe( (response) => {
      this.prescriptions = response;
    })
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(PrescriptionComponent, {
      height: '510px',
      width: '600px',
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.fetchDescriptions();
      }
    });
  }

  indexTrackByFn(index: number): number {
    return index;
  }
}
