

export class ResquestTree {

  public _id: number;

  public  _user: number
  public _type: number
  public requester_name: string;
  public place: string;
  public status: string;
  public created_at: string;
  public updated_at: string



  constructor(_id: number, _user: number, _type: number, requester_name: string, place: string, status: string, created_at: string, updated_at: string) {

    this._id = _id;
    this._user = _user;
    this._type = _type;
    this.status = status;
    this.requester_name = requester_name;
    this.place = place;
    this.created_at = created_at;
    this.updated_at = updated_at;
  
    };
}
