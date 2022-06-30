function Post({ data }) {
  const html = (data && data.htmlContent) ? <div dangerouslySetInnerHTML={{__html: data.htmlContent}}></div> : ''
  return (
    <div className="container">
      {html}
    </div>
  )
}

export async function getServerSideProps(context) {

  const res = await fetch(`${process.env.BASE_URL}/api/posts/${context.params.utitle}`)

  const json = await res.json()

  return { props: { data: json.data } }
}


export default Post