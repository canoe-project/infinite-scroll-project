// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import copys from "../../../data/copys.json";
import { resolve } from "path";

const handler = async (req, res) => {
  switch (req.method) {
    case "GET":
      await getData(req, res);
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
};

const getData = async (req, res) => {
  res.status(200).json(copys.mainHeadCopy);
  resolve();
};

export default handler;
