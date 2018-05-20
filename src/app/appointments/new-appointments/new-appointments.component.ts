import { Component, OnInit } from '@angular/core';

import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';



import{ NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Appointment } from '../appointment.model';
import { AppointmentService } from '../appointment.service';

@Component({
  selector: 'app-new-appointments',
  templateUrl: './new-appointments.component.html',
  styleUrls: ['./new-appointments.component.css']
})
export class NewAppointmentsComponent implements OnInit {

  title: string = "Criar Evento";
  closeBtnName: string = "Fechar";
  mensagem: string;
  appointment: Appointment;
  modify: boolean;
  onClose:any;


  constructor(public bsModalRef: BsModalRef, public appointmentService: AppointmentService,private router: Router) {
    this.appointment = new Appointment(null,null,null,null,null,null,null,null)
    ;}

  create(appointmentForm){
    this.appointmentService.createAppointment(this.appointment).subscribe();
    this.router.navigate(['appointment']);
    //função para enviar um objeto para o componete pai
    this.onClose(this.appointment);
  }

  ngOnInit() {
  }

}
