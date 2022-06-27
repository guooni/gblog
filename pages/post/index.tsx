type Props = {
  postItem: PostItem
}
type PostListProps = {
  list: PostItem[]
}

function PostItemComponent({ postItem }: Props) {
  return (
    <li>
      <a href={`/post/${postItem.id}`}>
        <h2>{postItem.title}</h2>
        <p>{postItem.summary}</p>
      </a>
    </li>
  )
}


function PostList({ list }: PostListProps) {
  const postList = list.map((e) => <PostItemComponent key={e.id} postItem={e} />)
  return (
    <ul>
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