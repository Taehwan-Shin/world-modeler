'use server'

import { GoogleGenerativeAI } from "@google/generative-ai"

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "")

export async function askGemini(prompt: string, context?: string) {
    if (!process.env.GEMINI_API_KEY) {
        return {
            text: "API Key가 설정되지 않았습니다. .env.local 파일을 확인해주세요.",
            error: true
        }
    }

    try {
        const model = genAI.getGenerativeModel({ model: "gemini-pro" })

        const systemPrompt = `
      당신은 '월드모델러'의 지적이고 분석적인 AI 튜터입니다.
      학생들이 수학적 개념을 사회 현상과 연결하여 이해하도록 돕습니다.
      답변은 친절하지만 감정적이지 않게, 논리적이고 명확하게 설명하세요.
      
      [컨텍스트]
      ${context || "없음"}
    `

        const result = await model.generateContent(`${systemPrompt}\n\n질문: ${prompt}`)
        const response = await result.response
        const text = response.text()

        return { text, error: false }
    } catch (error: any) {
        console.error("Gemini Error:", error)
        return {
            text: "AI 응답을 가져오는 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.",
            error: true
        }
    }
}
