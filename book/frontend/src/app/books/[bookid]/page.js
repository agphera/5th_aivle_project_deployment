import BookDetailClient from "./BookDetailClient";

// ⭐ 서버 전용: 정적 경로 생성
export async function generateStaticParams() {
  // 실습용 임시: 1~10번 책 페이지 생성
  return Array.from({ length: 10 }, (_, i) => ({
    bookid: String(i + 1),
  }));
}

// ⭐ 서버 컴포넌트 (use client ❌)
export default function BookDetailPage({ params }) {
  return <BookDetailClient bookid={params.bookid} />;
}
