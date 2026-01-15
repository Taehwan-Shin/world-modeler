'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import Link from "next/link"
import { Search } from "lucide-react"

// Mock Data (Expanded)
const CONCEPTS = [
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
    {
        id: 5,
        title: "행렬 (Matrix)",
        description: "데이터를 구조화하고 변환하는 틀",
        category: "Linear Algebra",
        level: 3,
    },
    {
        id: 6,
        title: "수열 (Sequence)",
        description: "규칙적인 수의 나열과 자연의 패턴",
        category: "Algebra",
        level: 1,
    },
]

export default function ExploreIndexPage() {
    return (
        <div className="space-y-8 animate-in fade-in duration-500">
            {/* Header & Search */}
            <div className="flex flex-col md:flex-row justify-between items-end gap-4 border-b border-slate-800 pb-6">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight text-white mb-2">
                        맥락 탐험 (Context Exploration)
                    </h1>
                    <p className="text-slate-400">
                        수학 개념이 현실 세계와 어떻게 연결되는지 탐험해보세요.
                    </p>
                </div>
                <div className="relative w-full md:w-72">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500" />
                    <Input
                        placeholder="개념, 현상 검색..."
                        className="pl-9 bg-slate-900/50 border-slate-800 focus-visible:ring-indigo-500"
                    />
                </div>
            </div>

            {/* Categories */}
            <div className="flex gap-2 overflow-x-auto pb-2">
                {["All", "Calculus", "Algebra", "Geometry", "Statistics", "Physics"].map((cat) => (
                    <Badge
                        key={cat}
                        variant={cat === "All" ? "default" : "secondary"}
                        className="cursor-pointer px-4 py-1.5"
                    >
                        {cat}
                    </Badge>
                ))}
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {CONCEPTS.map((concept, index) => (
                    <Link href={`/explore/${concept.id}`} key={concept.id}>
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.05 }}
                        >
                            <Card className="h-full glass-panel hover:bg-slate-800/80 cursor-pointer border-indigo-500/20">
                                <CardHeader>
                                    <div className="flex justify-between items-start mb-2">
                                        <Badge variant="outline" className="text-cyan-400 border-cyan-400/30">
                                            {concept.category}
                                        </Badge>
                                        <span className="text-xs text-slate-500">LV.{concept.level}</span>
                                    </div>
                                    <CardTitle className="text-xl text-slate-200 group-hover:text-white">
                                        {concept.title}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm text-slate-400">
                                        {concept.description}
                                    </p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </Link>
                ))}
            </div>
        </div>
    )
}
