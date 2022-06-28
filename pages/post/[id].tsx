function Post({ data }) {
  return (
    <div className="container">
      <div dangerouslySetInnerHTML={{__html: data.htmlContent}}></div>
    </div>
  )
}

export async function getServerSideProps(context) {

  const res = await fetch(`${process.env.API_BASE_URL}/posts/id?id=${context.params.id}`)

  const json = await res.json()

  return { props: { data: json.data } }
}


export default Post