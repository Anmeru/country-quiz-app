import axios from 'axios';

const API_URL = 'http://localhost:5000/api/quizzes';

export const fetchQuizzes = () => axios.get(API_URL);
export const fetchQuizById = (id) => axios.get(`${API_URL}/${id}`);
export const createQuiz = (quiz) => axios.post(API_URL, quiz);
