export class AppointmentRequest{
    public _id: number;
    public _user: number; //id do usuario que pediu pra participar do appointment de id _appointment
    public _appointment:number; //id do evento que o usuário solicita participar
    public status: string; //aprovado/pendente/negado
    public message:string; // mensagem que o dono do evento escreve dizendo porque aprovou/reprovou
    public updated_at: string; //data de mudança do status
    public created_at: string; //data da solicitação

    constructor(_id: number,_user: number,_appointment:number,status: string,
      message:string,updated_at: string,created_at: string){
      this._id = _id;
      this._user = _user;
      this._appointment =_appointment;
      this.status = status;
      this.message = message;
      this.updated_at = updated_at;
      this.created_at = created_at;
    }
}
