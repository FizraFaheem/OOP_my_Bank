interface ibanbaccount{
    credit (amount:number) : void;
    debit (amount:number) : void;
}

// Class
class Bankaccount implements ibanbaccount {
    accountBalance : number =0;
    constructor (accountbalance:number) {
        this.accountBalance=accountbalance
    }
    // Publically credits
    public credit(amount:number) {
        if (amount>0){
            this.accountBalance+=amount
            console.log("Credit Successfully get into new account and your balance is :"+this.accountBalance);
        }
        else {
            console.log("Credit Unsuccessfull");
        }
    }
    // Publically debit
    public debit(amount: number) {
        if (amount>0 && amount<this.accountBalance){
          this.accountBalance-=amount
          console.log("debit successfully share in new account balance:"+this.accountBalance);
        } else {
            console.log("debit Unsuccessfull")
        }
    }
} 

// Custpmer details

class Customer {
    person : {
        firstname: string;
        lastname: string;
    }
    age:number;
    gender:string;
    mobile_number: number;
    bankaccount: Bankaccount;

    constructor(person: {firstname:string,lastname:string},age:number,gender:string,mobile_number:number,bankaccount:Bankaccount){
    // this property utilization
    this.person=person;
    this.age=age;
    this.gender=gender;
    this.mobile_number=mobile_number;
    this.bankaccount=bankaccount;
     
    }

   // Publically user access
   public display(){
   console.log("Name: "+this.person.firstname+""+this.person.lastname);
   console.log("Age:" +this.age)
   console.log("Gender:" +this.gender)
   console.log("Mobile Number:" +this.mobile_number)
   console.log("Amount In Bank: " +this.bankaccount.accountBalance)
   console.log()
   }
}

const a1=new Bankaccount(800)
const c1=new Customer ( {firstname:"Fizra",lastname: "Faheem"},20,"female",134526787,a1);
c1.display()
c1.bankaccount.debit(500)
console.log()

const a2=new Bankaccount(500)
const c2=new Customer ( {firstname:"Hurya",lastname: "Sheikh"},12,"female",1345267987,a2);
c2.display()
c2.bankaccount.debit(200)
console.log()















