const { parse } = require('path');
const readline = require('readline');
const fs = require('fs');


class math{
    constructor(){
        this.setinterface();
        
    }
    quiz (){
        this.num1 = Math.floor(Math.random()*100);
        this.num2 = Math.floor(Math.random()*100);
        }
setinterface(){
    this.mathinterface = readline.createInterface({
    input:process.stdin,
    output:process.stdout
    });
}

chooseoperation(){
    this.mathinterface.question("what operation do you want to accomplish \n 1.addition\n 2.subtraction\n 3.multiplication\n 4.division\n",(choice)=>{
        switch(parseInt(choice)){
            case 1:
                this.handleaddition();
            break;
            case 2:
                this.handlesubtraction();
            break;
            case 3:
                this.handlemultiplication();
            break;
            case 4:
                this.handledivision();
            break;
            default:
                console.log('invalid input');
                this.mathinterface.close();
            
        }
        
     })
    }


handleaddition(){
    this.quiz()
   this.mathinterface.question(`what is ${this.num1} + ${this.num2} ?`,(unparsedanswer)=>{
    const parsedanswer = parseInt(unparsedanswer);
    const sum = this.num1 + this.num2;
    console.log('answer has been received')
    if(parsedanswer === sum){
        console.log('correct');
        this.printtofile('correct',parsedanswer);
    }else{
        console.log('incorrect');
        this.printtofile('incorrect',parsedanswer);
    }
    this.mathinterface.close();
    })
}

handlesubtraction(){
    this.quiz();
    this.mathinterface.question(`what is ${this.num1} - ${this.num2} ? `,(unparsedanswer)=>{
        const parsedanswer = parseInt(unparsedanswer);
    const subtraction = this.num1 - this.num2;
    if(subtraction === parsedanswer){
        console.log('correct')
        this.printtofile('correct',parsedanswer);
    }else{
        console.log('incorrect')
        this.printtofile('incorrect',parsedanswer);
    }
    this.mathinterface.close()
    })
    
}

handlemultiplication(){
    this.quiz();
    this.mathinterface.question(`what is your ${this.num1} * ${this.num2} ? `,(unparsedanswer)=>{
    const parsedanswer = parseInt(unparsedanswer);
   const multiplication = this.num1 - this.num2;
    if(multiplication === parsedanswer){
        console.log('correct')
        this.printtofile('correct',parsedanswer);
    }else{
        console.log('incorrect')
        this.printtofile('incorrect',parsedanswer);
    }
    })
}

handledivision(){
    this.quiz();
    this.mathinterface.question(`what is ${this.num1} / ${this.num2} ? `,(unparsedanswer)=>{
        
        const parsedanswer = parseInt(unparsedanswer)
    const division = this.num1/this.num2;
    if(parsedanswer === division){
        console.log('correct');
        this.printtofile('correct',parsedanswer)
    }else{
        console.log('incorrect');
        this.printtofile('incorrect',parsedanswer)
    }
    })
   
}
 
 /**
  * Function to choose the operation based on user input.
  *
  * @param {type} choice - the choice of operation selected by the user
  * @return {type} description of return value
  */

    printtofile(result){
        fs.writeFile("answer.txt",result,(error)=>{
            if(error){
                console.log('error writing to file');
            }else{
                console.log('it is written successfully to file');
            }
        })
    }
}
let ques = new math();
ques.chooseoperation();
