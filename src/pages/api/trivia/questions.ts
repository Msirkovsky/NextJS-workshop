import { NextApiRequest, NextApiResponse } from "next";

export function fetchQuestions() {

  return [
    { id: 1, correctAnswerId: 1, content: "What is Jamie Lannisters nickname", answers: [{ id: 1, content: "The Kingslayer" }, { id: 2, content: "The Hound" }, { id: 3, content: "The Mountain" }] },
    { id: 2, correctAnswerId: 3, content: "What is the name of the Stark ancestral home", answers: [{ id: 1, content: "The Eyrie" }, { id: 2, content: "Casterly Rock" }, { id: 3, content: "Winterfell" }] },
    { id: 3, correctAnswerId: 1, content: "What European city was used for filming Kings's Landing?", answers: [{ id: 1, content: "Dubrovnik" }, { id: 2, content: "Budapest" }, { id: 3, content: "Prague" }, { id: 4, content: "Šumperk" }] },
    { id: 4, correctAnswerId: 2, content: "What is the sigil of House Stark?", answers: [{ id: 1, content: "A lion" }, { id: 2, content: "A direwolf" }, { id: 3, content: "A dragon" }] },
  ]
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const questions = fetchQuestions();
    // TODO: return the JSON data with status 200 

  } catch (error) {
    //TODO: returns 500 with JSON containing the message: Fetching of questions failed.

  }
}