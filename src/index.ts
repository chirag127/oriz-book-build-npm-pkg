// @chirag127/oriz-book-build
// v0.1.0 — Pandoc wrapper for the oriz family book pipeline.
// CLI bin: oriz-book {build|preview|publish}.
// Real Pandoc invocation lands in v0.1.1 — this is the slug-reservation publish.
export const __pkg = '@chirag127/oriz-book-build' as const
export type BookManifest = {
  title: string
  subtitle?: string
  author: string
  language: string
  isbn?: string
  pricing: { base: number; pro?: number; currency: 'USD' | 'INR'; pwyw?: boolean }
  channels: Partial<Record<'leanpub' | 'gumroad' | 'lemonsqueezy' | 'kdp' | 'd2d' | 'gpb', boolean>>
  manuscript: string  // dir of numbered .md files
  outputs: { epub?: boolean; pdf?: boolean; mobi?: boolean; markua?: boolean }
}
