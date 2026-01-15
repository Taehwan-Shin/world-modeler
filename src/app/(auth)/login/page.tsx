'use client'

import { createClient } from '@/lib/supabase/client'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function LoginPage() {
    const [loading, setLoading] = useState(false)
    const router = useRouter()
    const supabase = createClient()

    const handleLogin = async () => {
        setLoading(true)
        const { error } = await supabase.auth.signInWithOAuth({
            provider: 'google',
            options: {
                redirectTo: `${location.origin}/auth/callback`,
                queryParams: {
                    access_type: 'offline',
                    prompt: 'consent',
                },
            },
        })

        if (error) {
            alert('Login failed: ' + error.message)
            setLoading(false)
        }
        // Redirect will happen automatically
    }

    return (
        <div className="flex min-h-[80vh] items-center justify-center">
            <Card className="w-full max-w-md border-indigo-500/30 bg-slate-900/80 shadow-[0_0_50px_rgba(79,70,229,0.15)]">
                <CardHeader className="text-center space-y-4">
                    <div className="mx-auto h-16 w-16 rounded-full bg-gradient-to-br from-indigo-500 to-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.5)] flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 text-white"><circle cx="12" cy="12" r="10" /><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" /><path d="M2 12h20" /></svg>
                    </div>
                    <CardTitle className="text-3xl font-bold glow-text">월드모델러</CardTitle>
                    <CardDescription className="text-lg">
                        학교 구글 계정으로 로그인하여<br />탐험을 시작하세요.
                    </CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                    <Button
                        onClick={handleLogin}
                        disabled={loading}
                        className="w-full h-12 text-lg font-semibold bg-white text-slate-900 hover:bg-slate-200"
                    >
                        {loading ? (
                            <span className="animate-pulse">연결 중...</span>
                        ) : (
                            <div className="flex items-center gap-2">
                                <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" /><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" /><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" /><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" /></svg>
                                Google 계정으로 계속하기
                            </div>
                        )}
                    </Button>
                    <p className="mt-4 text-center text-xs text-slate-500">
                        @school.edu 도메인 계정만 접속 가능합니다.
                    </p>
                </CardContent>
            </Card>
        </div>
    )
}
