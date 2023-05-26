import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {

  // returns 500 instead of 200. BUT ONLY for 50% of the requests.
  // response should look like this: 
  // { message: 'You're having a bit of bad luck today, aren't you?' } or { message: 'You are lucky' }
  // All of this applies only FOR put requests. For another methods returns 405 with the text "Method not allowed".

}
