import Link from "../../node_modules/next/link"

export default function Topic ({ list }) {
  return (
    <div className="container">
      <ul>
        {
          list.map(e => (
            <li key={e.id}>
              <Link href={`/topic/post?id=${e.id}`}>
                <a >{e.name}({e.postCount})</a>
              </Link>
            </li>
          ))
        }
      </ul>
    </div>
  )
}


export async function getServerSideProps() {
  const res = await fetch(`${process.env.BASE_URL}/api/topics`)

  const json = await res.json()

  return { props: { list: json } }
}
