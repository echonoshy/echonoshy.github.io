import MarkdownIt from 'markdown-it'

const md = new MarkdownIt({
  html: true,
  linkify: true,
  typographer: true,
})

export function renderMarkdown(raw: string): string {
  return md.render(raw)
}

export interface PostMeta {
  id: string
  title: string
  date: string
  tags: string[]
  summary: string
}

export async function fetchPostIndex(): Promise<PostMeta[]> {
  const res = await fetch('/posts/index.json')
  return res.json()
}

export async function fetchPost(id: string): Promise<string> {
  const res = await fetch(`/posts/${id}.md`)
  return res.text()
}
