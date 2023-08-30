import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Prescription, PrescriptionBody, ServiceResponse } from "../../models/prescription.model";
import { map, Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PrescriptionService {

  constructor(private readonly http: HttpClient) {}

  getPrescriptions(): Observable<Prescription[]> {
    return this.http.get<Prescription[]>('/spoed-epd/api/prescriptions');
  }

  postPrescriptions(body: PrescriptionBody):  Observable<Prescription> {
    return this.http.post<Prescription>('/spoed-epd/api/prescriptions', body);
  }
}
