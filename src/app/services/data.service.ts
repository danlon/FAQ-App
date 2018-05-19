import { Injectable } from '@angular/core';
import { Question } from '../models/Question';

@Injectable()
export class DataService {
  questions:Question[];

  constructor() { 
    /*
    this.questions = [
      {
        text:'What is your Name?',
        answer: 'My Name is Roger',
        hide: true
      },
      {
        text:'What is your favorite Color',
        answer:'Breezy Grey Blue',
        hide: true
      },
      {
        text:'What do you think about Lazers',
        answer:'Pew Pew',
        hide: true
      }
    ];
    */
  }
//Fetch Questions from Local Storage
  getQuestions() {
    if (localStorage.getItem('questions') === null) {
      this.questions = [];
    } else {
      this.questions = JSON.parse(localStorage.getItem('questions'));
    }    

    return this.questions;
  }

//Push Question to Local S -- must to convert to string to store locally
  addQuestion(question:Question){
    this.questions.unshift(question);
    //Init Local questions var
    let questions;

    if (localStorage.getItem('questions') === null) {
      questions = [];
      //Push New question
      questions.unshift(question);
      //Set new Array Local
      localStorage.setItem('questions', JSON.stringify(questions));

    } else {
      questions = JSON.parse(localStorage.getItem('questions'));
      // Add new QUestion
      questions.unshift(question);
      //Reset Local Storage
      localStorage.setItem('questions', JSON.stringify(questions));

    }    
  }

//delete Question LS
  removeQuestion(question){
    for(let i = 0; i < this.questions.length;i++){
    if(question == this.questions[i]) {
      this.questions.splice(i, 1);
      localStorage.setItem('questions', JSON.stringify(this.questions));

    }
  }
  }
}
