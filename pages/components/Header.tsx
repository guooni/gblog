import Link from "../../node_modules/next/link";

export default function Header () {
  return <header className="container m-auto">
    <nav>
      <ul className="flex justify-center py-4">
        <li className="px-2"><Link href="/post">文章</Link></li>
        <li className="px-2"><Link href="/topic">分类</Link></li>
        <li className="px-2"><Link href="/about">关于</Link></li>
      </ul>
    </nav>
  </header>
}