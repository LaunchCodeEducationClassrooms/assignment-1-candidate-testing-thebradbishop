const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = '';
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //

let question = 'Who was the first American woman in space?';
let correctAnswer = "Sally Ride";
let candidateAnswer = '';

let questions = ['1) Who was the first American woman in space? ', '2) True or false: 5000 meters = 5 kilometers. ', '3) (5 + 3)/2 * 10 = ? ', "4) Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ", '5) What is the minimum crew size for the ISS? '];
let correctAnswers = ["Sally Ride", "True", "40", "Trajectory", "3"];
let candidateAnswers = [];


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
  candidateName = input.question("Please enter your name? ");
  return candidateName;
}



function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  for (let i=0; i < questions.length; i++) {
    let answer = input.question(questions[i]);
    candidateAnswers.push(answer);
  }
  return candidateAnswers;
}

function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly //
  
  let correctNumber = 0;

  console.log(`Candidate Name: ${candidateName}`)

  for (let i = 0; i < candidateAnswers.length; i++){
    if (candidateAnswers[i].toLowerCase() == correctAnswers[i].toLowerCase()) {
    correctNumber++;
    console.log(
      `${questions[i]}\nYour Answer: ${candidateAnswers[i]}\nCorrect Answer: ${correctAnswers[i]}\n`
    );
    } else {
      console.log(`${questions[i]}\nYour Answer: ${candidateAnswers[i]}\nCorrect Answer: ${correctAnswers[i]}\n`)
    }
  }

  let grade = ((correctNumber/5)*100);
  
  let isPass = '';

  if (grade >= 80){
    isPass = 'PASSED'
  } else {
    isPass = 'FAILED'
  }

  console.log(`>>> Overall Grade: ${grade}% (${correctNumber} of 5 responses correct) <<<\n>>> Status: ${isPass} <<<`);
  return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
  //console.log(`Candidate Name: ${candidateName}`)
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};