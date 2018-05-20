import { Component, OnInit } from '@angular/core';
import { Appointment } from './appointment.model';
import { AppointmentService } from './appointment.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { NewAppointmentsComponent } from './new-appointments/new-appointments.component';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.css']
})
export class AppointmentsComponent implements OnInit {

  appointments: Appointment[];
  bsModalRef: BsModalRef;
  myData:any;

  constructor(private modalService: BsModalService,private appointmentService: AppointmentService) { }

  create() {

    this.bsModalRef = this.modalService.show(NewAppointmentsComponent);
    this.bsModalRef.content.closeBtnName = 'fechar';

    // funcao que recebe valores do modal
    this.bsModalRef.content.onClose = (myData) => {
        this.ngOnInit();
        this.bsModalRef.hide();
        this.myData = myData;
    };
  }

  ngOnInit() {
    setTimeout(() => {

    this.appointmentService.getAppointment()
    .subscribe(appointment => this.appointments = appointment);
    },300);
  }

}
