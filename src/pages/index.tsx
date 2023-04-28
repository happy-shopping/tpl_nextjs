import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>행복쇼핑 Next.js Pages 폴더 구조 템플릿</h1>
      <li>
        <Link href="/dayjs">dayjs 페이지</Link>
      </li>
      <li>
        <Link href="/axios">axios 페이지</Link>
      </li>
      <li>
        <Link href="/styles">styled-component theme 페이지</Link>
      </li>
      <li>
        <Link href="/react-query">react-query 예제 페이지</Link>
      </li>
      <li>
        <Link href="/counter">Redux counter 예제 페이지</Link>
      </li>
    </main>
  );
}
