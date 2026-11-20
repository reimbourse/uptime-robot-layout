export interface PricingPlan {
  id: string
  audience: string
  name: string
  description: string
  price: string
  period: string
  limits: string[]
  features: string[]
  cta: string
  recommended?: boolean
}

export interface ComparisonRow {
  label: string
  values: string[]
  mono?: boolean
}

export interface FaqItem {
  question: string
  answer: string
}
