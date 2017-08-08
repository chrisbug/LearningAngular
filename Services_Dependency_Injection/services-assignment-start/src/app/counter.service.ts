export class CounterService {
  inactiveAction: number;
  activeAction: number;

  constructor(){
    this.inactiveAction = 0;
    this.activeAction = 0;
  }

  addToInactiveAction(){
    this.inactiveAction += 1;
    console.log('inactive action count: ' + this.inactiveAction);
  }

  addToActiveAction(){
    this.activeAction += 1;
    console.log('active action count: ' + this.activeAction);
  }
}
