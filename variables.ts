const myName : string = 'Max'

interface IAccount{
    name:string,
    age:number,
    status? : string
}

const account : IAccount = {
    name:"Max",
    age:24
}

let accounts: IAccount[];

class InvestmentAccount implements IAccount{
    constructor(public name,public age)
    {

    }
}