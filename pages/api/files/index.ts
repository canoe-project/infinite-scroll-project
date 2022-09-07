// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import indexData from "data/index.json"
import { resolve } from "path";

const handler =async(
  req: NextApiRequest,
  res: NextApiResponse
) =>{
  switch (req.method) {
    case "GET":
      await getData(req, res)
      return;
    case "POST":
      return;
    case "PUT":
      return;
    case "DELETE":
      return;
    default:
      throw new Error();
  }
}

const getData = async(
  req: NextApiRequest,
  res: NextApiResponse
)=>{
  res.status(200).json(indexData)
  resolve();
}

export default handler