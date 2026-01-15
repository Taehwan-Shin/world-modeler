'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"
import Link from "next/link"
import { Concept } from "@/types"

// Mock Data for MVP (Will be replaced by DB fetch)
const FEATURED_CONCEPTS: Concept[] = [
    {
        id: 1,
        title: "미분 (Differential)",
        description: "변화의 순간을 포착하는 수학적 도구",
        category: "Calculus",
        level: 2,
    },
    {
        id: 2,
        title: "지수함수 (Exponential)",
        description: "감염병 확산과 인구 증가의 비밀",
        category: "Algebra",
        level: 1,
    },
    {
        id: 3,
        title: "확률 (Probability)",
        description: "불확실한 미래를 예측하는 언어",
        category: "Statistics",
        level: 2,
    },
    {
        id: 4,
        title: "벡터 (Vector)",
        description: "힘과 방향을 가진 세상의 화살표",
        category: "Geometry",
        level: 2,
    },
]

export default function DashboardPage() {
    return (
        <div className="space-y-8">
            {/* Header Section */}
            <div className="flex flex-col space-y-2">
                <h1 className="text-3xl font-bold tracking-tight text-white">
                    우주 정거장 (Context Cockpit)
                </h1>
                <p className="text-slate-400">
                    탐험할 수학적 개념 행성을 선택하세요.
                </p>
            </div>

            {/* Floating Planets Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
                {FEATURED_CONCEPTS.map((concept, index) => (
                    <Link href={`/explore/${concept.id}`} key={concept.id}>
                        <motion.div
                            whileHover={{ scale: 1.05, translateY: -5 }}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                        >
                            <Card className="h-full border-indigo-500/20 bg-slate-900/40 hover:bg-slate-800/60 hover:border-cyan-400/50 cursor-pointer overflow-hidden group relative">
                                <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-500/10 rounded-bl-full -mr-4 -mt-4 transition-all group-hover:bg-cyan-400/20" />

                                <CardHeader>
                                    <div className="text-xs font-mono text-cyan-400 mb-2">
                                        LV.{concept.level} • {concept.category}
                                    </div>
                                    <CardTitle className="text-xl group-hover:text-cyan-300 transition-colors">
                                        {concept.title}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm text-slate-400 leading-relaxed">
                                        {concept.description}
                                    </p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </Link>
                ))}
            </div>

            {/* Recommended Mission Section */}
            <div className="mt-16 p-6 rounded-2xl bg-gradient-to-r from-indigo-900/20 to-slate-900/50 border border-indigo-500/30">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="space-y-2">
                        <h2 className="text-xl font-semibold text-white">📡 수신된 미션: 경제 위기를 막아라</h2>
                        <p className="text-sm text-slate-400 max-w-xl">
                            '미분' 개념을 사용하여 급변하는 주가 그래프의 변곡점을 찾고, 경제 붕괴 시나리오를 시뮬레이션 해보세요.
                        </p>
                    </div>
                    <Link href="/explore/1">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-6 py-3 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/50 hover:bg-cyan-500/20 transition-all font-medium"
                        >
                            미션 수락하기
                        </motion.button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
