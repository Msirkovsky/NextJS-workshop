import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {

  // returns 500 instead of 200. BUT ONLY for 50% of the requests.
  // response should look like this: 
  // { message: 'You're having a bit of bad luck today, aren't you?' } or { message: 'You are lucky' }
  // All of this is only FOR put requests. For another methods returns 405 with the text "Method not allowed".
  if (req.method !== "PUT") {
    res.status(405).send("Method not allowed");
    return;
  }

  const val = Math.random();
  if (val >= 0.5) {
    res.status(500).json({ message: "You're having a bit of bad luck today, aren't you?" });
  } else {
    res.status(200).json({ message: "You are lucky" });
  }
}