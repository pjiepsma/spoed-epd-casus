import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrescriptionComponent } from "./prescription/prescription.component";
import { OverviewComponent } from "./overview/overview.component";
import { MatTableModule } from "@angular/material/table";
import { MatDialogModule } from "@angular/material/dialog";
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatSelectModule } from "@angular/material/select";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatIconModule } from "@angular/material/icon";

@NgModule({
  declarations: [PrescriptionComponent, OverviewComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
    MatPaginatorModule,
  ],
  exports: [OverviewComponent],
})
export class PrescriptionModule {}
