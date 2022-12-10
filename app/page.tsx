import Link from 'next/link'
import { AppButton } from '../components/button'
import prisma from '../lib/prisma'
import styles from '../styles/home/Page.module.css'

async function getProjcects() {
  const projects = await prisma.project.findMany()

  return projects
}

export default async function Page() {
  const projects = await getProjcects()

  return (
    <div className={styles.container}>
      {projects.map((project) => (
        <Link href={`/projects/${project.id}`} key={`project-${project.id}`}>
          <AppButton>{project.title}</AppButton>
        </Link>
      ))}
    </div>
  )
}
