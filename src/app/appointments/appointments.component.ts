import { Component, OnInit,TemplateRef } from '@angular/core';
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
  modalRef: BsModalRef;

  constructor(private modalService: BsModalService,private appointmentService: AppointmentService) { }

  create() {

    this.bsModalRef = this.modalService.show(NewAppointmentsComponent);
    this.bsModalRef.content.closeBtnName = 'fechar';

    // funcao que recebe valores do modal
    this.bsModalRef.content.onClose = (myData) => {
      this.refresh();
      this.bsModalRef.hide();
      this.myData = myData;
    };
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  delete(appointment:Appointment){
    this.appointmentService.delete(appointment, appointment._id).subscribe();
    this.refresh();
    this.modalRef.hide();
  }

  save(appointment:Appointment){
    this.appointmentService.save(appointment, appointment._id).subscribe();
    this.refresh();
    this.modalRef.hide();
  }

  refresh(){
    setTimeout(() => {

    this.appointmentService.getAppointment()
    .subscribe(appointment => this.appointments = appointment);
    },300);
  }

  ngOnInit() {
      this.refresh();
  }

}
