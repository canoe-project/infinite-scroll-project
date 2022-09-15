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
  const pageNo = req.query.pageNo;

  const numOfRows = "10";
  const response = await fetch(
    `http://api.kcisa.kr/openapi/service/rest/meta2020/getMCHBholdings?serviceKey=${
      process.env.CUL_SERVICE_KEY
    }&numOfRows=${numOfRows}&pageNo=${pageNo === undefined ? "1" : pageNo}`,
    {
      method: "GET",
      headers: { "Content-Type": "application/xhtml+xml" },
    }
  );
  const responseText = await response.text();
  const responseObj = await promisify(parseString)(responseText);

  res.json(await responseObj.response.body[0].items[0].item);
};
export default handler;
