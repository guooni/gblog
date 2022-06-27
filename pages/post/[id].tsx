function Post({ data }) {
  return (
    <div className="container">
      <div dangerouslySetInnerHTML={{__html: data.htmlContent}}></div>
    </div>
  )
}

export async function getServerSideProps(context) {
  const res = await fetch(`${process.env.HTTP_BASE_API}/posts/id?id=${context.params.id}`)

  const json = await res.json()

  return { props: { data: json.data } }
}


export default Post