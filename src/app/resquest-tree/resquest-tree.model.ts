export class NewResquestTree {


  public  _user: number
  public _type: number
  public requester_name: string;
  public place: string;




  constructor( _user: number, _type: number, requester_name: string, place: string) {


    this._user = _user;
    this._type = _type;

    this.requester_name = requester_name;
    this.place = place;

  };
}


export class ResquestTree {

  public _id: number;

  public  _user: number
  public _type: number
  public requester_name: string;
  public place: string;
  public status: string;
  public created_at: string;
  public updated_at: string;
  public requester_phone: string;

  public street: string;
  public zipcode: string;
  public number: number;
  public complement: string;
  public neighborhood: string;
  public city: string;
  public state: string;

  public sidewalk_size: number;
  public photo: string;

  public location_lat: string;
  public  location_lng: string;
  public  quantity: number;
  public planting_date: string;





  constructor(_id: number, _user: number, _type: number, requester_name: string, place: string,
     status: string, created_at: string, updated_at: string,  street: string,
    complement: string, number: number, neighborhood: string, city: string, state: string,
    zipcode: string, quantity: number, location_lng: string,location_lat: string, sidewalk_size: number, photo: string,  planting_date: string) {

      this._id = _id;
      this._user = _user;
      this._type = _type;
      this.status = status;
      this.requester_name = requester_name;
      this.place = place;
      this.created_at = created_at;
      this.updated_at = updated_at;
      this.street = street;
      this.complement = complement;
      this.number = number;
      this.neighborhood = neighborhood;
      this.city = city;
      this.state = state;
      this.zipcode = zipcode;
      this.quantity = quantity;
      this.location_lat = location_lat;
      this.location_lng= location_lng;
      this.sidewalk_size = sidewalk_size;
      this.photo = photo;
      this.planting_date = planting_date;
    };
  }
