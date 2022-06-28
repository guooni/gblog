export default async function handler(req, res) {
  const data = await fetch(`${process.env.API_BASE_URL}/posts/?pageNumber=1&pageSize=10`)
  const json = await data.json()
  res.status(200).json(json.data)
}
