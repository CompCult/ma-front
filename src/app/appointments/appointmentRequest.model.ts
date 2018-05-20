export class appointmentRequest {
  public  id:           number;
  public _user:         number;
  public _appointment:  number;
  public status:        string;
  public message:       string;
  public updated_at:    string;
  public created_at:    string;

  constructor(id :number,_user: number,_appointment: number,status: string,message: string,
  updated_at: string,created_at: string){
    this.id = id;
    this._user = _user;
    this._appointment= _appointment;
    this.status = status;
    this.message = message;
    this.updated_at = updated_at;
    this.created_at = created_at;

  }
}
