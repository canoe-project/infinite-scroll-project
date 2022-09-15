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

  const response = await fetch(
    `${process.env.CUL_GITHUB_PAGE}culture-${
      pageNo === undefined ? "1" : pageNo
    }.json`,
    {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    }
  );
  const responseObj = await response.json();
  res.json(await responseObj.response.body.items.item);
};
export default handler;
