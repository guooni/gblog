
export default function handler(req, res) {
  res.status(200).json([{ id: 1, name: 'JavaScript', postCount: 10 }, { id: 2, name: '日常', postCount: 10 }, { id: 3, name: 'CSS', postCount: 1 }, { id: 4, name: 'Web3', postCount: 1 }])
}
