import { Project } from '@prisma/client'

export default function ProjectLayout({
  params,
  children,
}: {
  params: { project: Number }
  children: React.ReactNode
}) {
  return (
    <section style={{ padding: '0 8rem', margin: 'auto' }}>{children}</section>
  )
}
