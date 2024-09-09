import React, { useEffect, useState } from 'react';
import { fetchQuizById } from '../api';
import styles from './Quiz.module.css';

const Quiz = ({ quizId }) => {
  const [quiz, setQuiz] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);

  useEffect(() => {
    const getQuiz = async () => {
      try {
        const response = await fetchQuizById(quizId);
        setQuiz(response.data);
      } catch (error) {
        console.error('Error fetching quiz:', error);
      }
    };
    getQuiz();
  }, [quizId]);

  const handleAnswer = (questionIndex, option) => {
    const correctAnswer = quiz.questions[questionIndex].answer;
    if (option === correctAnswer) {
      setScore(score + 1);
    }
    setSelectedAnswer(option);
  };

  if (!quiz) return <div>Loading...</div>;

  return (
    <div className={styles.quizContainer}>
      <h1 className={styles.quizTitle}>{quiz.title}</h1>
      {quiz.questions.map((question, index) => (
        <div key={index} className={styles.questionContainer}>
          <img src={question.flagUrl} alt={`Flag of ${question.country}`} className={styles.flagImage} />
          <div>
            <p>What country does this flag belong to?</p>
            <div className={styles.optionsContainer}>
              {question.options.map((option, idx) => (
                <button
                  key={idx}
                  className={styles.optionButton}
                  onClick={() => handleAnswer(index, option)}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        </div>
      ))}
      <div className={styles.scoreContainer}>
        <h2>Score: {score}</h2>
      </div>
    </div>
  );
};

export default Quiz;
