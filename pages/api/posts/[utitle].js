export default async function handler(req, res) {
  const data = await fetch(`${process.env.API_BASE_URL}/posts/utitle?utitle=${req.query.utitle}`)
  const json = await data.json()
  res.status(200).json(json)
}
