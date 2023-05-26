/*
Url of this page: http://localhost:3000/trivia-quiz/
Application: https://www.postman.com/
Or https://nightingale.rest/ - but please refer to the documentation: https://github.com/jenius-apps/nightingale-rest-api-client/blob/master/docs/localhost.md
There is a problem with security on Windows. 

Tasks: 

1. Implement the API for retrieving the questions: 
  File: \src\pages\api\trivia\questions.ts
  Docs: https://nextjs.org/docs/pages/building-your-application/routing/api-routes

2. Implement the API for checking the answers:
  File: \src\pages\api\trivia\check.ts
  Docs: https://nextjs.org/docs/pages/building-your-application/routing/api-routes#query-parameters

3. Change API to returns 500 instead of 200. BUT ONLY for 50% of the requests and ONLY for the PUT method for another methods returns 405.
  File: \src\pages\api\trivia\returning500.ts
  Url: http://localhost:3000/api/trivia/returning500
  Docs: https://nextjs.org/docs/pages/building-your-application/routing/api-routes#setting-the-status-code-of-a-response

*/

import { useCallback, useEffect, useState } from 'react';
import { Answer, Question, QuestionModel, } from '../../models';

export default function Page() {

  const [questions, setQuestions] = useState<QuestionModel[]>([]);

  useEffect(() => {
    fetch('/api/trivia/questions').then((res) => res.json()).then((data) => {
      setQuestions(data.map((x: any) => ({ ...x, message: null, correct: null })) as QuestionModel[]);
    })
  }, [])

  const submitAnswer = useCallback((question: Question, answer: Answer) => {
    fetch('api/trivia/check?questionId=' + question.id + '&answerId=' + answer.id).then(x => x.json()).then(x => {
      const mapped = questions.map(q => q.id === question.id ? { ...q, correct: x.correct, message: (x.correct ? 'Correct!' : 'Incorrect') } : q)
      setQuestions(mapped)
    })
  }, [questions])

  if (questions.length === 0) return <p>Loading...</p>;

  return (
    <div className='trivia-quiz'>
      <h1>Trivia Quiz</h1>

      <ol>
        {questions.map((question) => (
          <li key={question.id}>
            <p>{question.content}</p>
            {question.answers.map(x => (<div>
              <input key={x.id} type="radio" id={question.id.toString() + x.content} name={question.id.toString()} value="huey" onChange={e => submitAnswer(question, x)} />
              <label htmlFor={question.id.toString()}>{x.content}</label>

            </div>)
            )}
            <span

              className={`trivia-quiz-message ${question.correct ? 'trivia-quiz-message--correct' : 'trivia-quiz-message--incorrect'}`}

            >{question.message}</span>
          </li>
        ))}
      </ol>
    </div >
  );
}