'use client'

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { Search, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

// 2022 Revised Curriculum Data
type CurriculumSection = {
    subject: string
    units: { title: string; description: string; id: number }[]
}

const CURRICULUM: CurriculumSection[] = [
    {
        subject: "공통수학1",
        units: [
            { id: 101, title: "다항식", description: "문자와 식의 계산 구조" },
            { id: 102, title: "방정식과 부등식", description: "복소수와 이차식의 해법" },
            { id: 103, title: "경우의 수", description: "합리적인 선택과 나열" },
            { id: 104, title: "행렬", description: "데이터의 직사각형 배열과 연산" },
        ]
    },
    {
        subject: "공통수학2",
        units: [
            { id: 201, title: "도형의 방정식", description: "좌표평면 위의 기하학" },
            { id: 202, title: "집합과 명제", description: "논리적 사고의 기초" },
            { id: 203, title: "함수와 그래프", description: "변화 관계의 시각화" },
        ]
    },
    {
        subject: "대수 (General Elective)",
        units: [
            { id: 301, title: "지수함수와 로그함수", description: "급격한 변화와 큰 수의 다룸" },
            { id: 302, title: "삼각함수", description: "주기적인 현상의 모델링" },
            { id: 303, title: "수열", description: "규칙적인 수의 나열과 패턴" },
        ]
    },
    {
        subject: "미적분Ⅰ (General Elective)",
        units: [
            { id: 401, title: "함수의 극한과 연속", description: "무한으로 다가가는 상태" },
            { id: 402, title: "미분", description: "순간적인 변화율의 해석" },
            { id: 403, title: "적분", description: "변화의 누적과 넓이" },
        ]
    },
    {
        subject: "확률과 통계 (General Elective)",
        units: [
            { id: 501, title: "경우의 수", description: "순열, 조합과 이항정리" },
            { id: 502, title: "확률", description: "불확실성의 수치화" },
            { id: 503, title: "통계", description: "데이터 분석과 추론" },
        ]
    },
    {
        subject: "미적분Ⅱ (Career Elective)",
        units: [
            { id: 601, title: "수열의 극한", description: "무한수열과 급수의 수렴" },
            { id: 602, title: "여러 가지 미분법", description: "초월함수의 미분과 활용" },
            { id: 603, title: "여러 가지 적분법", description: "다양한 적분 기법과 응용" },
        ]
    },
    {
        subject: "기하 (Career Elective)",
        units: [
            { id: 701, title: "이차곡선", description: "포물선, 타원, 쌍곡선" },
            { id: 702, title: "공간도형과 공간좌표", description: "3차원 공간의 해석" },
            { id: 703, title: "벡터", description: "크기와 방향을 가진 양" },
        ]
    },
    {
        subject: "경제수학 (Career Elective)",
        units: [
            { id: 801, title: "수와 생활경제", description: "환율, 세금, 경제지표" },
            { id: 802, title: "수열과 금융", description: "이자, 원리합계와 연금" },
            { id: 803, title: "함수와 경제", description: "비용, 수익, 효용 함수" },
            { id: 804, title: "미분과 경제", description: "한계비용과 탄력성" },
        ]
    },
    {
        subject: "인공지능수학 (Career Elective)",
        units: [
            { id: 901, title: "인공지능과 빅데이터", description: "AI의 기초와 데이터 이해" },
            { id: 902, title: "자료의 표현 (텍스트/이미지)", description: "비정형 데이터의 벡터화" },
            { id: 903, title: "예측과 최적화", description: "경향성 파악과 손실 최소화" },
            { id: 904, title: "인공지능과 수학 탐구", description: "AI 모델링 프로젝트" },
        ]
    },
]

function SubjectSection({ section, defaultOpen = false }: { section: CurriculumSection, defaultOpen?: boolean }) {
    const [isOpen, setIsOpen] = useState(defaultOpen)

    return (
        <div className="border border-slate-800 rounded-xl overflow-hidden bg-slate-950/30">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between p-6 hover:bg-slate-900/50 transition-colors"
            >
                <div className="flex items-center gap-3">
                    <Badge variant="outline" className="text-indigo-400 border-indigo-400/30">
                        {section.subject.includes("(") ? section.subject.split(" ")[0] : section.subject}
                    </Badge>
                    <span className="text-lg font-semibold text-slate-200">
                        {section.subject}
                    </span>
                </div>
                <ChevronDown className={cn("h-5 w-5 text-slate-500 transition-transform duration-300", isOpen && "rotate-180")} />
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        <div className="p-6 pt-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                            {section.units.map((unit) => (
                                <Link href={`/explore/${unit.id}`} key={unit.id}>
                                    <Card className="h-full glass-panel hover:bg-slate-800/80 cursor-pointer border-indigo-500/20 group transition-all hover:-translate-y-1">
                                        <CardHeader className="p-4 pb-2">
                                            <span className="text-xs text-slate-500 font-mono mb-1">UNIT {unit.id}</span>
                                            <CardTitle className="text-base text-slate-200 group-hover:text-white group-hover:text-cyan-400 transition-colors">
                                                {unit.title}
                                            </CardTitle>
                                        </CardHeader>
                                        <CardContent className="p-4 pt-0">
                                            <p className="text-xs text-slate-400 line-clamp-2">
                                                {unit.description}
                                            </p>
                                        </CardContent>
                                    </Card>
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

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
                        2022 개정 교육과정 기반의 수학 개념 지도입니다. 대주제를 선택하여 세상을 읽는 도구를 찾아보세요.
                    </p>
                </div>
                <div className="relative w-full md:w-72">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500" />
                    <Input
                        placeholder="단원명, 개념 검색..."
                        className="pl-9 bg-slate-900/50 border-slate-800 focus-visible:ring-indigo-500"
                    />
                </div>
            </div>

            {/* Curriculum Accordion List */}
            <div className="space-y-4">
                {CURRICULUM.map((section, idx) => (
                    <SubjectSection key={section.subject} section={section} defaultOpen={idx < 2} />
                ))}
            </div>
        </div>
    )
}
