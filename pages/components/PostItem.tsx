import Link from "../../node_modules/next/link";

type Props = {
  postItem: PostItem
}

export default function PostItemComponent({ postItem }: Props) {
  return (
    <li>
      <Link href={`/post/${postItem.utitle}`}>
        <a>
          <h2>{postItem.title}</h2>
        </a>
      </Link>
      <p>{postItem.summary}</p>
    </li>
  )
}