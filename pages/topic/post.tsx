
export default function TopicPost(props) {
  return <div>TopicPost</div>
}

export async function getServerSideProps(context) {
  const res = await fetch(`${process.env.BASE_URL}/api/topics/posts?id=${context.query.id}`)

  const json = await res.json()

  return { props: { list: json } }
}
