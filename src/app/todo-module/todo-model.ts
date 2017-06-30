import * as moment from 'moment'

export class Todo {

  id: number;

  title: string = ''; // client
  //description: string = ''; // server

  complete: boolean = false;
  cancel: boolean = false;
  startDate: Date;
  dueDate: Date;

  
  constructor(values: Object = {}) {
    Object.assign(this, values);
    this.title = values['description'];
  }
  
  getToDoServerObj(){
    return {
      description: this.title,
      complete: this.complete,
      cancel: this.cancel,
      startDate: moment(this.startDate).format('YYYY-MM-DD'),
      dueDate: moment(this.dueDate).format('YYYY-MM-DD'),

    }
  }

}
