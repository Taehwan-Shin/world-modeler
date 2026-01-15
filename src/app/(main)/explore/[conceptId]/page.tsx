'use client'

import { useParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Simulator } from "@/components/features/Simulator"
import Link from "next/link"
import { ArrowLeft, ExternalLink, Share2, BookOpen } from "lucide-react"

export default function ExplorePage() {
    const params = useParams()
    const id = Number(params.conceptId)

    // Mock Data (In real app, fetch from Supabase based on ID)
    // For MVP demo, we assume ID 1 is "Differential"
    const concept = {
        id: 1,
        title: "미분 (Differential)",
        subtitle: "변화의 순간을 포착하는 도구",
        description: "미분은 어떤 운동이나 변화의 '순간적인 속도'를 계산하는 수학적 방법입니다. 자동차의 속도계부터 주식 시장의 추세 분석, 인공지능의 학습 최적화(경사하강법)까지, 변화가 있는 모든 곳에 미분이 숨어 있습니다.",
        category: "Calculus",
        formula: "f'(x) = lim(h->0) [f(x+h) - f(x)] / h",
    }

    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            {/* Navigation & Header */}
            <div className="flex items-center justify-between">
                <Button variant="ghost" size="sm" asChild className="text-slate-400 hover:text-white">
                    <Link href="/dashboard">
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        우주 정거장으로 복귀
                    </Link>
                </Button>
                <div className="flex gap-2">
                    <Button variant="secondary" size="icon">
                        <Share2 className="h-4 w-4" />
                    </Button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Left Column: Concept Definition */}
                <div className="lg:col-span-4 space-y-6">
                    <Card className="border-indigo-500/30 bg-slate-900/60 h-full">
                        <CardHeader>
                            <div className="flex items-center gap-2 mb-2">
                                <Badge variant="outline" className="text-cyan-400 border-cyan-400/30">{concept.category}</Badge>
                                <span className="text-xs text-slate-500">CODE: {concept.id.toString().padStart(3, '0')}</span>
                            </div>
                            <CardTitle className="text-3xl text-white glow-text">{concept.title}</CardTitle>
                            <CardDescription className="text-slate-400 text-lg">{concept.subtitle}</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="p-4 rounded-lg bg-slate-950 border border-slate-800 font-mono text-cyan-300 text-center text-sm break-all">
                                {concept.formula}
                            </div>
                            <p className="text-slate-300 leading-relaxed">
                                {concept.description}
                            </p>

                            <div className="pt-4 border-t border-slate-800">
                                <h4 className="text-sm font-medium text-slate-400 mb-3 flex items-center gap-2">
                                    <BookOpen className="h-4 w-4" /> 교과 연계
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                    <Badge variant="secondary" className="bg-slate-800 text-slate-300 hover:bg-slate-700">수학 II</Badge>
                                    <Badge variant="secondary" className="bg-slate-800 text-slate-300 hover:bg-slate-700">미적분</Badge>
                                    <Badge variant="secondary" className="bg-slate-800 text-slate-300 hover:bg-slate-700">경제 수학</Badge>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Right Column: Phenomena & Simulation */}
                <div className="lg:col-span-8 space-y-8">

                    {/* 1. Simulation Section */}
                    <section>
                        <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                            <span className="w-2 h-6 bg-cyan-500 rounded-full" />
                            시뮬레이션: 경제 위기 감지기
                        </h3>
                        <Simulator
                            title="주가 변화율(미분값)에 따른 경제 예측"
                            variableName="변화율 (Rate of Change)"
                            unit="%"
                            min={-10}
                            max={10}
                            defaultValue={0}
                            scenarios={[
                                { threshold: -5, outcome: "📉 [위기 경보] 주가가 급격히 하락하고 있습니다. 시장의 공포 심리가 확산되어 투매가 이어질 수 있습니다 (Deep Crash).", color: "border-rose-500 bg-rose-500/20" },
                                { threshold: -1, outcome: "☁️ [하락세] 시장이 다소 위축되었습니다. 조정 국면에 접어들었습니다.", color: "border-amber-500 bg-amber-500/20" },
                                { threshold: 2, outcome: "🌤️ [안정적] 완만한 성장세를 보이고 있습니다. 건강한 시장 흐름입니다.", color: "border-emerald-500 bg-emerald-500/20" },
                                { threshold: 10, outcome: "🚀 [과열 주의] 주가가 폭등하고 있습니다. 버블 붕괴의 위험이 있으니 미분값(변화 속도)을 주시해야 합니다.", color: "border-orange-500 bg-orange-500/20" },
                            ]}
                        />
                    </section>

                    {/* 2. News/Context Section */}
                    <section>
                        <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                            <span className="w-2 h-6 bg-indigo-500 rounded-full" />
                            관련 현상 및 뉴스
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <Card className="glass-panel hover:bg-slate-800/80 cursor-pointer group">
                                <CardHeader>
                                    <Badge className="w-fit bg-emerald-500/10 text-emerald-400 border-emerald-500/20 mb-2">경제</Badge>
                                    <CardTitle className="text-lg text-slate-200 group-hover:text-white transition-colors">
                                        인플레이션 그래프의 '기울기'가 꺾였다
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm text-slate-400 mb-4 line-clamp-2">
                                        물가 상승률이 여전히 양수(+)이지만, 상승 속도(미분값)가 줄어들고 있다는 것은 경제가 안정화되고 있다는 신호일까요?
                                    </p>
                                    <div className="flex items-center text-xs text-indigo-400 gap-1 group-hover:underline">
                                        뉴스 원문 보기 <ExternalLink className="h-3 w-3" />
                                    </div>
                                </CardContent>
                            </Card>

                            <Card className="glass-panel hover:bg-slate-800/80 cursor-pointer group">
                                <CardHeader>
                                    <Badge className="w-fit bg-purple-500/10 text-purple-400 border-purple-500/20 mb-2">AI 기술</Badge>
                                    <CardTitle className="text-lg text-slate-200 group-hover:text-white transition-colors">
                                        자율주행차는 '미분'으로 핸들을 꺾는다
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm text-slate-400 mb-4 line-clamp-2">
                                        도로의 곡률을 실시간으로 계산하여 최적의 경로를 찾는 PID 제어 알고리즘의 핵심에는 미분과 적분이 있습니다.
                                    </p>
                                    <div className="flex items-center text-xs text-indigo-400 gap-1 group-hover:underline">
                                        기술 분석 보기 <ExternalLink className="h-3 w-3" />
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </section>

                </div>
            </div>
        </div>
    )
}
