'use client'

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"
import { Save, Sparkles, FileText, Database } from "lucide-react"
import { createClient } from "@/lib/supabase/client"
import { useRouter } from "next/navigation"

export default function StudioPage() {
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const [isSaving, setIsSaving] = useState(false)
    const supabase = createClient()
    const router = useRouter()

    const handleSave = async () => {
        setIsSaving(true)
        const { data: { user } } = await supabase.auth.getUser()

        if (!user) {
            alert("로그인이 필요합니다.")
            router.push("/login")
            return
        }

        const { error } = await supabase.from('reports').upsert({
            user_id: user.id,
            title: title || "제목 없음",
            content: { text: content }, // Simple JSON structure
            updated_at: new Date().toISOString()
        })

        if (error) {
            alert("저장 실패: " + error.message)
        } else {
            alert("보고서가 저장되었습니다.")
        }
        setIsSaving(false)
    }

    return (
        <div className="flex flex-col lg:flex-row gap-6 h-[calc(100vh-140px)]">
            {/* Left Panel: Ingredients (Scraps) */}
            <Card className="w-full lg:w-1/3 glass-panel h-full flex flex-col border-indigo-500/20">
                <CardHeader className="border-b border-slate-800 pb-4">
                    <CardTitle className="text-lg flex items-center gap-2 text-indigo-300">
                        <Database className="h-4 w-4" />
                        수집한 탐구 재료
                    </CardTitle>
                </CardHeader>
                <CardContent className="flex-1 overflow-y-auto p-4 space-y-4">
                    <div className="p-4 rounded-lg bg-slate-950/50 border border-slate-800 border-dashed text-center text-slate-500 text-sm">
                        아직 수집한 탐구 재료가 없습니다.<br />
                        <span className="text-cyan-400">'맥락 탐험'</span>에서 흥미로운 내용을 스크랩해보세요.
                    </div>
                    {/* Mock Item */}
                    <div className="p-3 rounded-lg bg-slate-800/50 border border-slate-700 cursor-move hover:border-indigo-500/50 transition-colors">
                        <div className="text-xs text-cyan-400 mb-1">시뮬레이션 결과</div>
                        <div className="text-sm text-slate-200">경제 위기 감지기 (-5% 하락 시나리오)</div>
                    </div>
                </CardContent>
                <div className="p-4 border-t border-slate-800 bg-slate-900/50">
                    <Button variant="secondary" className="w-full gap-2">
                        <Sparkles className="h-4 w-4 text-cyan-400" />
                        AI에게 재료 추천받기
                    </Button>
                </div>
            </Card>

            {/* Right Panel: Editor */}
            <Card className="w-full lg:w-2/3 glass-panel h-full flex flex-col border-indigo-500/20">
                <CardHeader className="border-b border-slate-800 pb-4 flex flex-row items-center justify-between">
                    <CardTitle className="text-lg flex items-center gap-2 text-indigo-300">
                        <FileText className="h-4 w-4" />
                        탐구 보고서 작성
                    </CardTitle>
                    <Button onClick={handleSave} disabled={isSaving} className="gap-2">
                        <Save className="h-4 w-4" />
                        {isSaving ? "저장 중..." : "저장하기"}
                    </Button>
                </CardHeader>
                <CardContent className="flex-1 p-0 flex flex-col">
                    <input
                        type="text"
                        placeholder="보고서 제목을 입력하세요"
                        className="w-full bg-transparent p-6 text-2xl font-bold text-white placeholder-slate-600 focus:outline-none"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <textarea
                        className="flex-1 w-full bg-slate-950/30 p-6 text-slate-300 placeholder-slate-600 focus:outline-none resize-none leading-relaxed"
                        placeholder="자유롭게 탐구 내용을 작성하세요. 왼쪽의 재료를 참고하여 나만의 통찰을 기록해보세요..."
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                    />
                </CardContent>
            </Card>
        </div>
    )
}
