import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] text-center space-y-8">
      <div className="relative">
        <div className="absolute inset-0 bg-indigo-500 blur-[100px] opacity-20 rounded-full w-64 h-64 mx-auto" />
        <h1 className="relative text-5xl md:text-7xl font-bold tracking-tighter text-white mb-4">
          World Modeler
        </h1>
      </div>

      <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
        수학이라는 렌즈로 세상을 투시하고,<br />
        보이지 않는 구조를 발견하는 <span className="text-indigo-400 font-semibold">카탈라이저</span>가 되어보세요.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 pt-8">
        <Button asChild size="lg" className="text-lg px-8">
          <Link href="/dashboard">탐험 시작하기</Link>
        </Button>
        <Button asChild variant="secondary" size="lg" className="text-lg px-8">
          <Link href="/about">더 알아보기</Link>
        </Button>
      </div>

      <div className="absolute bottom-10 animate-bounce text-slate-600">
        <span className="text-xs uppercase tracking-widest">Scroll to explore</span>
      </div>
    </div>
  )
}
