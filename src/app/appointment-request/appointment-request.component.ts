import { Component, OnInit } from '@angular/core';
import { AppointmentRequest } from './appointmentRequest.model';
import { AppointmentRequestService } from './AppointmentRequest.service';

@Component({
  selector: 'app-appointment-request',
  templateUrl: './appointment-request.component.html',
  styleUrls: ['./appointment-request.component.css']
})
export class AppointmentRequestComponent implements OnInit {

  appointmentsRequest: AppointmentRequest[];

  constructor(private appointmentrequestService: AppointmentRequestService) { }

  ngOnInit() {
    setTimeout(() => {

    this.appointmentrequestService.getAppointmentRequest()
    .subscribe(appointmentsRequest => this.appointmentsRequest = appointmentsRequest);
    },300);
  }

}
