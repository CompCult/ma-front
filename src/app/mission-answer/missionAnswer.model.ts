export class MissionAnswer {

  public _id: number;
  public _user: number;
  public _mission: number;
  public _group: number;
  public status: string;// válida/inválida/pendente
  public image: string; //link da imagem
  public audio: string;  // link do áudio
  public video: string;
  public text_msg: string; //(renomear de text para text_msg)
  public location_lat: string; //latitutde do gps
  public location_lng: string; //longitude do gps
  public created_at: string;


  constructor(_id:number ,_user :number ,_mission :number ,_group :number , status: string , image: string, audio: string, video: string,
     text_msg: string, location_lat: string, location_lng: string, created_at: string){

       this._id = _id;
       this._user= _user;
       this._mission = _mission;
       this._group =_group;
       this.status =status;
       this.image =image;
       this.audio =audio;
       this.video =video;
       this.text_msg =text_msg;
       this.location_lat =location_lat;
       this.location_lng =location_lng;
       this.created_at =created_at;


    }


}
