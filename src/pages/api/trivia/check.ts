import { NextApiRequest, NextApiResponse } from "next";
import { fetchQuestions } from "./questions";


export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const questions = fetchQuestions();
    // TODO: get questionId and answerId from query parameters

    // TODO: check if the answer is correct and return JSON with property: correct : true/false
    // hint: use the questionId to find the question and check if the answerId matches the correctAnswerId
    // response should look like this: { correct: true } or { correct: false }


  } catch (error) {
    // TODO: returns 500 with JSON containing the message: Checking of answers failed.

  }
}