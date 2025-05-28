import { Component } from '@angular/core';
import { Question } from 'src/app/models/question';
import { QuestionsService } from 'src/app/services/questions.service';

@Component({
  selector: 'app-trivia',
  templateUrl: './trivia.component.html',
  styleUrls: ['./trivia.component.css']
})
export class TriviaComponent {
  questions: Question[] = [];
  currentIndex: number = 0;
  currentQuestion!: Question;
  selectedAnswer: string | null = null;
  quizFinished: boolean = false;
  score: number = 0;

  constructor(private questionService: QuestionsService) {}

  ngOnInit(): void {
    this.questions = this.questionService.getQuestions();
    this.loadQuestion();
  }

  loadQuestion() {
    this.currentQuestion = this.questions[this.currentIndex];
    this.selectedAnswer = null;
  }

  selectAnswer(option: string) {
    this.selectedAnswer = option;
    if (option === this.currentQuestion.correctAnswer) {
      this.score++;
    }
    setTimeout(() => {
      this.nextQuestion();
    }, 3000);
  }

  nextQuestion() {
    this.currentIndex++;
    if (this.currentIndex < this.questions.length) {
      this.loadQuestion();
    } else {
      this.quizFinished = true;
    }
  }

  restart() {
    this.currentIndex = 0;
    this.quizFinished = false;
    this.score = 0;
    this.loadQuestion();
  }
}
