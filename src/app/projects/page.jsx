import Image from 'next/image';
import Link from 'next/link';
import { webProjects, mobileProjects } from '@/data/projects';
import { Badge } from '@/components/ui/Badge';
import { siteConfig } from '@/config/site';
import { ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'Projects',
  description:
    "Explore Innovance Tech AI's portfolio — web platforms, e-commerce systems, mobile apps, and scalable digital products built for startups and growing businesses.",
  alternates: { canonical: `${siteConfig.url}/projects` },
};

export default function ProjectsPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="container-main">
        {/* Page Header */}
        <div className="mb-16 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-text-dark tracking-tight mb-4">
            Our Projects
          </h1>
          <p className="text-lg text-text-muted max-w-2xl mx-auto leading-relaxed">
            A curated collection of digital products we&apos;ve designed, built, and shipped — from
            responsive web platforms to native mobile applications.
          </p>
        </div>

        {/* Web Projects */}
        <section aria-labelledby="web-heading" className="mb-20">
          <h2 id="web-heading" className="text-2xl font-bold text-text-dark mb-8 pb-3 border-b border-gray-200">
            Web Applications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {webProjects.map((project) => (
              <Link
                key={project.id}
                href={`/projects/${project.id}`}
                className="group relative rounded-2xl overflow-hidden bg-white/70 backdrop-blur-sm
                           border border-white/50 shadow-card hover:shadow-card-hover hover:-translate-y-2
                           transition-all duration-500 ease-out flex flex-col h-full"
              >
                <div className="relative h-52 md:h-56 overflow-hidden shrink-0">
                  <Image
                    src={project.image}
                    alt={`${project.title} preview`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-base/60 via-base/10 to-transparent
                                  opacity-0 group-hover:opacity-100 transition-opacity duration-500
                                  flex items-end justify-center pb-4">
                    <span className="text-white text-sm font-medium flex items-center gap-1.5
                                     backdrop-blur-sm bg-white/10 px-4 py-2 rounded-full">
                      View Details
                    </span>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-lg font-bold text-text-dark mb-2 group-hover:text-accent1 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-text-muted text-sm leading-relaxed mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <Badge key={tag}>{tag}</Badge>
                    ))}
                  </div>
                  <div className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-text-dark group-hover:text-accent1 transition-colors">
                    View Details <ArrowRight size={14} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Mobile Projects */}
        <section aria-labelledby="mobile-heading">
          <h2 id="mobile-heading" className="text-2xl font-bold text-text-dark mb-8 pb-3 border-b border-gray-200">
            Mobile Applications
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10 justify-items-center">
            {mobileProjects.map((project) => (
              <Link
                key={project.id}
                href={`/projects/${project.id}`}
                className="group flex flex-col items-center"
              >
                <div className="relative block w-44 h-80 md:w-48 md:h-[22rem] rounded-[2rem] overflow-hidden
                                bg-white shadow-card border-[6px] border-white/80
                                group-hover:shadow-card-hover group-hover:-translate-y-3
                                transition-all duration-500 ease-out">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-5 bg-white rounded-b-xl z-10" />
                  <Image
                    src={project.image}
                    alt={`${project.title} preview`}
                    fill
                    sizes="200px"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-base/60 to-transparent
                                  opacity-0 group-hover:opacity-100 transition-opacity duration-400
                                  flex items-end justify-center pb-6">
                    <span className="text-white text-xs font-medium backdrop-blur-sm bg-black/20 px-3 py-1.5 rounded-full">
                      View Details
                    </span>
                  </div>
                </div>
                <div className="mt-5 text-center max-w-[200px]">
                  <h3 className="text-base font-bold text-text-dark mb-1.5 group-hover:text-accent1 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-text-muted text-xs leading-relaxed mb-3 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap justify-center gap-1.5">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="muted">{tag}</Badge>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
