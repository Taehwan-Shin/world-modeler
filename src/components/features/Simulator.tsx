'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'

interface SimulatorProps {
    title: string
    variableName: string
    unit: string
    min: number
    max: number
    defaultValue: number
    scenarios: {
        threshold: number
        outcome: string
        color: string
    }[]
}

export function Simulator({
    title,
    variableName,
    unit,
    min,
    max,
    defaultValue,
    scenarios
}: SimulatorProps) {
    const [value, setValue] = useState(defaultValue)
    const [isPlaying, setIsPlaying] = useState(false)

    // Find current scenario based on value
    const currentScenario = scenarios.find(s => value <= s.threshold) || scenarios[scenarios.length - 1]

    return (
        <Card className="glass-panel border-indigo-500/30 overflow-hidden">
            <CardHeader className="bg-slate-900/50 border-b border-slate-800">
                <CardTitle className="flex items-center gap-2 text-indigo-300">
                    <span className="animate-pulse">⚡</span>
                    {title}
                </CardTitle>
            </CardHeader>

            <CardContent className="space-y-6 pt-6">
                {/* Visualization Area */}
                <div className="relative h-48 rounded-lg bg-slate-950 border border-slate-800 flex items-center justify-center overflow-hidden group">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900/20 via-slate-950 to-slate-950" />

                    {/* Dynamic Graph/Visual (Simplified) */}
                    <motion.div
                        className={cn("w-32 h-32 rounded-full border-4 blur-sm transition-colors duration-500", currentScenario.color)}
                        animate={{
                            scale: isPlaying ? [1, 1.2, 1] : 1,
                            opacity: [0.5, 0.8, 0.5]
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                    />

                    <div className="absolute z-10 text-4xl font-mono font-bold text-white drop-shadow-lg">
                        {value}{unit}
                    </div>
                </div>

                {/* Controls */}
                <div className="space-y-4">
                    <div className="flex justify-between text-sm text-slate-400">
                        <span>{variableName} 조절</span>
                        <span>{min}{unit} ~ {max}{unit}</span>
                    </div>

                    <input
                        type="range"
                        min={min}
                        max={max}
                        step={1}
                        value={value}
                        onChange={(e) => {
                            setValue(Number(e.target.value))
                            setIsPlaying(true)
                        }}
                        onMouseUp={() => setIsPlaying(false)}
                        onTouchEnd={() => setIsPlaying(false)}
                        className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer focus:outline-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:bg-cyan-400 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:shadow-[0_0_10px_rgba(34,211,238,0.5)] [&::-webkit-slider-thumb]:transition-transform hover:[&::-webkit-slider-thumb]:scale-110"
                    />
                </div>

                {/* Outcome Text */}
                <div className="p-4 rounded-lg bg-slate-800/50 border border-slate-700 min-h-[100px]">
                    <h4 className="text-sm font-semibold text-slate-300 mb-2">시뮬레이션 결과</h4>
                    <AnimatePresence mode="wait">
                        <motion.p
                            key={currentScenario.outcome}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="text-slate-200 leading-relaxed"
                        >
                            "{currentScenario.outcome}"
                        </motion.p>
                    </AnimatePresence>
                </div>
            </CardContent>
        </Card>
    )
}
