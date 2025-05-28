import { Injectable } from '@angular/core';
import { Question } from '../models/question';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {
  private questions: Question[] = [
    {
      question: '¿Cuál es la función de un vertedero?',
      image: 'assets/images/Vertedero.jpeg',
      options: ['Controlar la erosion del cauce', 'Reducir la velocidad del flujo', 'Medir y controlar el caudal'],
      correctAnswer: 'Medir y controlar el caudal'
    }, {
      question: '¿Qué describe la ecuación de Bernoulli?',
      image: 'assets/images/Bernoulli.jpeg',
      options: ['Relación entre caudal y area', 'Conservación de masa', 'Conservación de energía'],
      correctAnswer: 'Conservación de energía'
    }, {
      question: '¿Qué es el golpe de ariete?',
      options: ['Una pérdida por fricción', 'Un aumento brusco de presión', 'La formación de remolinos'],
      correctAnswer: 'Un aumento brusco de presión'
    },
    {
      question: '¿Qué tipo de estructura se utiliza para medir y regular el flujo de agua en un canal abierto?',
      options: ['Vertedero', 'Compuerta', 'Presa'],
      correctAnswer: 'Vertedero'
    },
    {
      question: '¿Cuál es una ventaja de los conductos presurizados comparados con conductos a presión atmosferica?',
      options: ['Menor costo de mantenimiento', 'Menor perdida localizada', 'Mayor energia disponible'],
      correctAnswer: 'Mayor energia disponible'
    },
    {
      question: '¿Cuál es una función importante de los revestimientos en canales abiertos?',
      options: ['Aumentar la velocidad del flujo', 'Reducir la fricción y las pérdidas de agua', 'Mejorar la estabilidad estructural'],
      correctAnswer: 'Reducir la fricción y las pérdidas de agua'
    },
    {
      question: 'El tubo venturi que mide una masa de fluido constante demuestra basandose en el principio de bernoulli y conservación de la masa que',
      image: 'assets/images/Tubo venturi.jpeg',
      options: ['Disminuye la seccion entonces aumenta la energía cinética y baja da energía de presión','Disminuye la seccion y disminuye el caudal', 'Disminuye la sección entonces disminuye la energía cinética y aumenta la energía de presión'],
      correctAnswer: 'Disminuye la seccion entonces aumenta la energía cinética y baja da energía de presión'
    },
    {
      question: '¿Qué caracteriza al flujo uniforme en canales abiertos?',
      options: ['La pendiente varía a lo largo del canal', 'La velocidad y la profundidad permanecen constantes', 'El caudal varía con el tiempo','La presión es mayor que la atmosférica'],
      correctAnswer: 'La velocidad y la profundidad permanecen constantes'
    },
    {
      question: 'El número de Reynolds en hidráulica se utiliza para:',
      options: ['Identificar el régimen de flujo', 'Determinar la velocidad crítica del canal', 'Medir la presión del fluido'],
      correctAnswer: 'Identificar el régimen de flujo'
    },
    {
      question: 'El flujo crítico en un canal abierto se produce cuando:',
      options: ['El número de Froude es mayor que 1',  'El número de Reynolds es menor que 2000','El caudal es constante y la pendiente es cero','El número de Froude es igual a 1'],
      correctAnswer: 'El número de Froude es igual a 1'
    }
  ];

  getQuestions() {
    return this.questions;
  }
}
