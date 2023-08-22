import { Component } from '@angular/core';

export interface Denominations{
  Denomination: number;
  count: number;
  addNotes: number;
}

@Component({
  selector: 'app-atm',
  templateUrl: './atm.component.html',
  styleUrls: ['./atm.component.scss']
})

export class AtmComponent {
constructor(){}
arrayForLog: any = []
currTime: any
disableDeposit: boolean = true
arrayForDenominations: Denominations[] = [
  {
    "Denomination": 2000,
    "count": 0,
    "addNotes": 0
  },
  {
    "Denomination": 500,
    "count": 0,
    "addNotes": 0
  },
  {
    "Denomination": 200,
    "count": 0,
    "addNotes": 0
  },
  {
    "Denomination": 100,
    "count": 0,
    "addNotes": 0
  }
]
total: any = 0
withdrawal: any = 0
DepositAmount(){
  this.currTime = new Date();
  var denominations: string = ''
  this.arrayForDenominations.map((item)=>{
    item.count += item.addNotes
    this.total += (item.Denomination * item.addNotes)
    denominations += item.Denomination + ':' + item.addNotes + ' '
    item.addNotes = 0
  });
  this.arrayForLog.unshift({
    type: "Deposit",
    denominations: denominations,
    time: this.currTime
  })
  this.disableDeposit = true
}

withdrawAmount(){
  this.currTime = new Date();
  var withdrawalAmount = this.withdrawal
  var denominations: string = ''
  if(withdrawalAmount <= this.total){
    for(let i=0;i<this.arrayForDenominations.length;i++){
      if(withdrawalAmount >= this.arrayForDenominations[i].Denomination){
        let requiredNotes = Math.floor(withdrawalAmount/this.arrayForDenominations[i].Denomination);
        console.log(requiredNotes)
        if(this.arrayForDenominations[i].count >= requiredNotes && requiredNotes != 0){
          this.arrayForDenominations[i].count -= requiredNotes;
          this.total -= (this.arrayForDenominations[i].Denomination * requiredNotes);
          withdrawalAmount -= (this.arrayForDenominations[i].Denomination * requiredNotes);
          this.withdrawal -= (this.arrayForDenominations[i].Denomination * requiredNotes);
          denominations += this.arrayForDenominations[i].Denomination + ':' + requiredNotes + ' '
        } else{
          denominations += this.arrayForDenominations[i].Denomination + ':' + '0 '
        }
      }else{
        denominations += this.arrayForDenominations[i].Denomination + ':' + '0 '
      }
    }
    if(withdrawalAmount > 0){
      let revertarray = denominations.split(' ')
      this.arrayForDenominations.map((item,i)=>{
        item.count += parseInt(revertarray[i].split(':')[1])
        this.total += (item.Denomination * parseInt(revertarray[i].split(':')[1]))
        item.addNotes = 0
        this.withdrawal = 0
      });
      this.arrayForLog.unshift({
        type: "Cannot Withdraw - Try Changing the denominations",
        denominations: '',
        time: this.currTime
      })
    } else {
      this.arrayForLog.unshift({
        type: "Withdraw",
        denominations: denominations,
        time: this.currTime
      })
    }
  }else{
    alert('Amount is not Available!')
  }
}
depositVal(i: any){
  // this.disableDeposit = true
  this.disableDeposit = !this.arrayForDenominations.some((item)=>{return (item.addNotes != 0 && item.addNotes != null)});
}

}
