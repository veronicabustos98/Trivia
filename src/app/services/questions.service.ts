import { Injectable } from '@angular/core';
import { Question } from '../models/question';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {
  private questions: Question[] = [
    {
      question: '¿Cuál es la función de un vertedero?',
      image: 'assets/paris.jpg',
      options: ['Controlar la erosion del cauce', 'Reducir la velocidad del flujo', 'Medir y controlar el caudal'],
      correctAnswer: 'Medir y controlar el caudal'
    }, {
      question: '¿Qué describe la ecuación de Bernoulli?',
      image: 'assets/paris.jpg',
      options: ['Relación entre caudal y area', 'Conservación de masa', 'De energía en un fluido'],
      correctAnswer: 'De energía en un fluido'
    }, {
      question: '¿Qué es el golpe de ariete?',
      image: 'assets/paris.jpg',
      options: ['Una pérdida por fricción', 'Un aumento brusco de presión', 'La formación de remolinos'],
      correctAnswer: 'Un aumento brusco de presión'
    },
    {
      question: '¿Qué tipo de estructura se utiliza para medir y regular el flujo de agua en un canal abierto?',
      image: 'assets/paris.jpg',
      options: ['Vertedero', 'Compuerta', 'Presa'],
      correctAnswer: 'Vertedero'
    },
    {
      question: '¿Cuál es una ventaja de los conductos presurizados comparados con conductos a presión atmosferica?',
      image: 'assets/paris.jpg',
      options: ['Menor costo de mantenimiento', 'Menor perdida localizada', 'Mayor energia disponible'],
      correctAnswer: 'Menor perdida localizada'
    },
       {
      question: '¿Cuál es una función importante de los revestimientos en canales abiertos?',
      image: 'assets/paris.jpg',
      options: ['Aumentar la velocidad del flujo', 'Reducir la fricción y las pérdidas de agua', 'Mejorar la estabilidad estructural'],
      correctAnswer: 'Reducir la fricción y las pérdidas de agua'
    }
  ];

  getQuestions() {
    return this.questions;
  }
}
