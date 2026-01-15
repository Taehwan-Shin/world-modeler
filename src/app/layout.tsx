import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'World Modeler',
  description: '수학으로 세상을 투시하다',
}

function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-slate-800 bg-slate-950/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/dashboard" className="flex items-center space-x-2">
          <div className="h-8 w-8 rounded-full bg-indigo-500 shadow-[0_0_15px_rgba(99,102,241,0.6)]" />
          <span className="text-xl font-bold tracking-tight text-white glow-text">
            World Modeler
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/dashboard" className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors">
            우주 정거장
          </Link>
          <Link href="/explore" className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors">
            맥락 탐험
          </Link>
          <Link href="/studio" className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors">
            탐구 스튜디오
          </Link>
        </nav>

        {/* User Profile / Login */}
        <div className="flex items-center space-x-4">
          <Button variant="secondary" size="sm" asChild>
            <Link href="/login">Log In</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko" className="dark">
      <body className={cn(inter.className, "min-h-screen bg-slate-950 pt-16")}>
        <Navbar />
        <main className="container mx-auto px-4 py-8">
          {children}
        </main>
      </body>
    </html>
  )
}
