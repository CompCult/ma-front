import { Component, OnInit,TemplateRef } from '@angular/core';
import { AppointmentRequest } from './appointmentRequest.model';
import { AppointmentRequestService } from './AppointmentRequest.service';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-appointment-request',
  templateUrl: './appointment-request.component.html',
  styleUrls: ['./appointment-request.component.css']
})
export class AppointmentRequestComponent implements OnInit {

  appointmentsRequest: AppointmentRequest[];
  modalRef: BsModalRef;
  appointmentRequest:AppointmentRequest;

  constructor(private modalService: BsModalService,private appointmentrequestService: AppointmentRequestService) { }

  ngOnInit() {
    setTimeout(() => {

    this.appointmentrequestService.getAppointmentRequest()
    .subscribe(appointmentsRequest => this.appointmentsRequest = appointmentsRequest);
    },300);
  }

  reject(appointmentRequest2: AppointmentRequest){
    this.appointmentRequest = appointmentRequest2;
    this.appointmentRequest.status ="Negado";
    this.appointmentrequestService.delete(this.appointmentRequest, appointmentRequest2._id).subscribe();
    this.modalRef.hide();

  }
  approve(appointmentRequest2: AppointmentRequest){
    this.appointmentRequest = appointmentRequest2;
    this.appointmentRequest.status ="Aprovado";
    this.appointmentrequestService.update(this.appointmentRequest, appointmentRequest2._id).subscribe();
    this.modalRef.hide();
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

}
