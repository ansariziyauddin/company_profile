import { webProjects, mobileProjects } from '@/data/projects';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { siteConfig } from '@/config/site';

export async function generateStaticParams() {
  return [...webProjects, ...mobileProjects].map((project) => ({
    slug: project.id,
  }));
}

export async function generateMetadata({ params }) {
  const project = [...webProjects, ...mobileProjects].find(
    (p) => p.id === params.slug
  );
  if (!project) return { title: 'Project Not Found' };

  return {
    title: project.title,
    description: project.description,
    alternates: { canonical: `${siteConfig.url}/projects/${project.id}` },
    openGraph: {
      title: project.title,
      description: project.description,
      images: [{ url: project.image, alt: project.title }],
    },
  };
}

export default function ProjectPage({ params }) {
  const project = [...webProjects, ...mobileProjects].find(
    (p) => p.id === params.slug
  );

  if (!project) notFound();

  const isWeb = project.type === 'web';
  const isMobile = project.type === 'mobile';

  return (
    <div className="pt-32 pb-16 min-h-screen bg-gray-50/30">
      <div className="container-main">
        {/* Breadcrumb / Back */}
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-text-muted hover:text-accent1 transition-colors mb-10
                     px-4 py-2 rounded-lg hover:bg-white shadow-sm border border-transparent hover:border-gray-100"
        >
          <ArrowLeft size={16} />
          <span className="font-medium">Back to Projects</span>
        </Link>

        <div className={`mt-6 flex flex-col ${isWeb ? 'lg:flex-row lg:gap-16 lg:items-start' : ''}`}>
          {/* Header */}
          <div className={`${isWeb ? 'lg:w-5/12 mb-10 lg:mb-0' : 'mb-14'}`}>
            <h1 className="text-4xl md:text-6xl font-extrabold text-text-dark mb-6 tracking-tight drop-shadow-sm">
              {project.title}
            </h1>
            <div className="flex flex-wrap gap-3 mb-8">
              {project.tags.map((tag) => (
                <Badge key={tag} variant="default" className="text-sm px-3 py-1 bg-accent1/10 text-accent1 border-none">
                  {tag}
                </Badge>
              ))}
            </div>
            <p className="text-xl md:text-2xl text-text-muted max-w-4xl leading-relaxed font-light">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              {isWeb && project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-accent1 to-accent2
                             text-white font-semibold rounded-xl hover:shadow-accent-lg transition-all transform hover:-translate-y-1"
                >
                  <ExternalLink size={18} />
                  Visit Live Project
                </a>
              )}
              {isMobile && project.playStoreLink && (
                <a
                  href={project.playStoreLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-4 bg-[#0D0F1A] border-2 border-[#0D0F1A]
                             text-white font-semibold rounded-xl hover:bg-transparent hover:text-[#0D0F1A] hover:shadow-lg transition-all transform hover:-translate-y-1"
                >
                  <ExternalLink size={18} />
                  Get on Google Play
                </a>
              )}
              {isMobile && project.appStoreLink && (
                <a
                  href={project.appStoreLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-4 bg-[#0D0F1A] border-2 border-[#0D0F1A]
                             text-white font-semibold rounded-xl hover:bg-transparent hover:text-[#0D0F1A] hover:shadow-lg transition-all transform hover:-translate-y-1"
                >
                  <ExternalLink size={18} />
                  Download on App Store
                </a>
              )}
            </div>
          </div>

          {/* Media */}
          <div className={`${isWeb ? 'lg:w-7/12 flex justify-center lg:justify-end' : 'w-full mt-4'}`}>
            {isMobile ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 pb-12 pt-4 px-4 md:px-0">
                {(project.screenshots || [project.image]).map((src, index) => (
                  <div key={index} className="flex justify-center items-center w-full">
                    <div className="relative w-[75%] rounded-2xl overflow-hidden">
                      <Image
                        src={src}
                        alt={`${project.title} screen ${index + 1}`}
                        width={800}
                        height={1600}
                        className="w-full h-auto object-contain"
                        sizes="(max-width: 768px) 75vw, 35vw"
                        priority={index < 2}
                      />
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="w-full flex justify-center">
                <Image
                  src={project.image}
                  alt={`${project.title} — Preview`}
                  width={1664}
                  height={1080}
                  className="w-full h-auto rounded-xl shadow-2xl border border-gray-100/50"
                  sizes="(max-width: 1024px) 100vw, 1000px"
                  priority
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
