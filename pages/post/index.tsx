import PostItemComponent from "../components/PostItem"

type PostListProps = {
  list: PostItem[]
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
  const res = await fetch(`${process.env.BASE_URL}/api/posts`)

  const json = await res.json()

  return { props: { list:json.list } }
}

export default PostList