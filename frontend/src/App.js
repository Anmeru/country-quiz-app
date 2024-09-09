import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import QuizList from './components/QuizList';
import Quiz from './components/Quiz';

const App = () => {
  const [selectedQuizId, setSelectedQuizId] = useState(null);

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Country Flag Quiz Application</h1>
          <nav>
            <Link to="/">Home</Link>
            {selectedQuizId && <Link to={`/quiz/${selectedQuizId}`}>Start Quiz</Link>}
          </nav>
        </header>
        <main>
          <Switch>
            <Route path="/" exact>
              <QuizList onSelectQuiz={setSelectedQuizId} />
            </Route>
            <Route path="/quiz/:id" render={({ match }) => (
              <Quiz quizId={match.params.id} />
            )} />
          </Switch>
        </main>
      </div>
    </Router>
  );
};

export default App;
