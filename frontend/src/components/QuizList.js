import React, { useEffect, useState } from 'react';
import { fetchQuizzes } from '../api';
import styles from './QuizList.module.css';

const QuizList = ({ onSelectQuiz }) => {
  const [quizzes, setQuizzes] = useState([]);

  useEffect(() => {
    const getQuizzes = async () => {
      try {
        const response = await fetchQuizzes();
        setQuizzes(response.data);
      } catch (error) {
        console.error('Error fetching quizzes:', error);
      }
    };
    getQuizzes();
  }, []);

  return (
    <div className={styles.quizListContainer}>
      <h1 className={styles.quizListTitle}>Country Flag Quiz List</h1>
      <ul>
        {quizzes.map(quiz => (
          <li
            key={quiz._id}
            className={styles.quizItem}
            onClick={() => onSelectQuiz(quiz._id)}
          >
            {quiz.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuizList;
