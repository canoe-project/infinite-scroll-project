import { resolve } from "path";
import { parseString } from "xml2js";
import { promisify } from "util";

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
  const apiData = await fetch(
    `http://api.kcisa.kr/openapi/service/rest/meta2020/getMCHBholdings?serviceKey=3616d4bb-758d-46a7-a3a4-f86f2b9bfc1d&numOfRows=10`,
    {
      method: "GET",
      headers: { "Content-Type": "application/xhtml+xml" },
    }
  )
    .then((response) => response.text())
    .then(async (responseText) => {
      return await promisify(parseString)(responseText);
    })
    .then((data) => {
      return data.response.body[0].items[0].item;
    });
  res.json(apiData);
  resolve();
};
export default handler;
