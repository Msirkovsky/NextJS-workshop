// http://localhost:3000/api/trivia/cookie
import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {

  // Cookies? use cookies-next library
  const time = 4 * 60 * 60 * 1000; // 4 hours
  const expires = new Date(Date.now() + time).toUTCString();
  res.setHeader('Set-Cookie', `randomCookieName=anyStringValue; Expires=${expires}`);

  // The question, what does this code do and when?
  // res.redirect(307, '/');
  // and
  // res.redirect(308, '/');

  //res.status(200).json({ message: 'Cookie has been set' });
}
