import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { PrescriptionUnit } from "../../../models/prescription.model";
import { MatDialogRef } from "@angular/material/dialog";
import { PrescriptionService } from "../../../data/prescription/prescription.service";

@Component({
  selector: 'spoed-epd-use-case-prescription',
  templateUrl: './prescription.component.html',
  styleUrls: ['./prescription.component.css'],
})
export class PrescriptionComponent {
  constructor(private readonly prescriptionService: PrescriptionService, private dialogRef: MatDialogRef<PrescriptionComponent>) { }

  prescriptionUnit = PrescriptionUnit;

  form: FormGroup = new FormGroup({
    name: new FormControl<string | null>(null, [
      Validators.required,
    ]),
    description: new FormControl<string | null>(null),
    quantity : new FormControl<string | null>(null, [
      Validators.required,
      Validators.min(1)
      ]
    ),
    unit: new FormControl<PrescriptionUnit | null>(null, {
      validators: Validators.required,
    }),
  });

  submitDialog(): void{
    if(this.form.valid){
      this.prescriptionService.postPrescriptions(this.form.value).subscribe(() => {
        this.dialogRef.close(true);
      })
    }
  }
}
