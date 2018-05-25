export class QuizAnswer {

  public _id: number;
  public _user: number;
  public _quiz: number;
  public answer: string;
  public approved: boolean;
  public created_at: string;


  constructor(_id:number ,_user:number, _quiz:number, answer:string, created_at:string, approved:boolean){

       this._id = _id;
      this._user =_user;
      this._quiz =_quiz;
      this.answer = answer;
      this.created_at= created_at;
      this.approved= approved;

    }


}
