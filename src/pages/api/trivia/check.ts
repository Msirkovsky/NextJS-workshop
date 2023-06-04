import { NextApiRequest, NextApiResponse } from "next";
import { fetchQuestions } from "./questions";


export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const questions = fetchQuestions();
    // TODO: get questionId and answerId from query parameters
    const questionId = parseInt(req.query.questionId as string)
    const answerId = parseInt(req.query.answerId as string)
    // TODO: check if the answer is correct and return JSON with property: correct : true/false
    // hint: use the questionId to find the question and check if the answerId matches the correctAnswerId
    // response should look like this: { correct: true } or { correct: false }
    const isOk = questions.find(q => q.id === questionId)?.correctAnswerId == answerId
    res.status(200).json({ correct: isOk });

  } catch (error) {
    // TODO: returns 500 with JSON containing the message: Checking of answers failed.
    res.status(500).json({ message: "Checking of answers failed." });
  }
}