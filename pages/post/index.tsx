import Link from "../../node_modules/next/link"

type Props = {
  postItem: PostItem
}
type PostListProps = {
  list: PostItem[]
}

function PostItemComponent({ postItem }: Props) {
  return (
    <li>
      <Link href={`/post/${postItem.id}`}>
        <a>
          <h2>{postItem.title}</h2>
        </a>
      </Link>
      <p>{postItem.summary}</p>
    </li>
  )
}


function PostList({ list }: PostListProps) {
  const postList = list.map((e) => <PostItemComponent key={e.id} postItem={e} />)
  return (
    <ul >
      {postList}
    </ul>
  )
}

export async function getServerSideProps() {
  const res = await fetch(`${process.env.HTTP_BASE_API}/posts/?pageNumber=1&pageSize=10`)

  const json = await res.json()

  return { props: { list: json.data.list } }
}

export default PostList