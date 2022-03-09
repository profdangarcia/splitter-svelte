type Splitted = {
  tipPerPerson: number;
  totalPerPerson: number;
}

const splitIt = (bill: number, people: number, tip: number): Splitted => {
  let tipPerPerson = 0;
  let totalPerPerson = 0;

  if(bill && people){
    console.log('entrei');
    let totalBill = bill;
    let totalTip = 0;
    if(tip){
      totalTip = bill * tip/100;
      totalBill = bill + totalTip;
    }
    tipPerPerson = totalTip/people;
    totalPerPerson = totalBill/people;
  }

  return {
    tipPerPerson, 
    totalPerPerson
  };
}

export default splitIt;