export class Test{
    constructor(){

    }
    testMethod(){
        let empCode: any= '007';
        let employeeCode: any = <Number> empCode;
        console.log(typeof(employeeCode));
    }
}

let a = new Test();

a.testMethod();