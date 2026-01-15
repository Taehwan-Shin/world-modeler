export type Concept = {
    id: number
    title: string
    description: string
    category: string
    level: number
    image_url?: string // Optional for visualization
}

export type Phenomenon = {
    id: number
    title: string
    content: string
    type: 'news' | 'simulation' | 'history'
    metadata: Record<string, any>
}

export type UserProfile = {
    id: string
    username: string | null
    full_name: string | null
    avatar_url: string | null
}
