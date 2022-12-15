import Image from 'next/image'
import prisma from '../../../lib/prisma'

async function getProject(id: string) {
  const project = await prisma.project.findFirst({
    where: { id },
  })

  return project
}

async function getGalleries(projectId: string) {
  const galleries = await prisma.projectGallery.findMany({
    where: { projectId },
    orderBy: {
      order: 'asc',
    },
  })

  return galleries
}

export default async function Page({
  params,
  searchParams,
}: {
  params: { project: string }
  searchParams?: { [key: string]: string | string[] | undefined }
}) {
  const [project, galleries] = await Promise.all([
    getProject(params.project),
    getGalleries(params.project),
  ])

  return (
    <>
      <h1>{project?.title}</h1>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '500px auto',
          width: '100%',
          gap: '1rem',
        }}
      >
        {galleries.map((gallery) => (
          <div
            style={{ maxWidth: '500px', height: '500px', position: 'relative' }}
            key={`${project?.title}-${gallery.order}`}
          >
            <Image
              src={gallery.url}
              alt={`${project?.title}-${gallery.order}`}
              fill={true}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              quality={100}
            />
          </div>
        ))}
      </div>
    </>
  )
}
