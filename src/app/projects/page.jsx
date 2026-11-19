import Link from 'next/link';
import Image from 'next/image';
import { webProjects, mobileProjects } from '@/data/projects';
import { Badge } from '@/components/ui/Badge';
import { JsonLd } from '@/components/seo/JsonLd';
import { siteConfig } from '@/config/site';
import { ArrowRight, CheckCircle2, ShieldCheck, Mail } from 'lucide-react';

export const metadata = {
  title: 'Engineering Case Studies',
  description:
    'Explore Innovance Tech AI’s portfolio of enterprise case studies — scalable web architectures, resilient mobile systems, and mission-critical digital platforms.',
  alternates: { canonical: `${siteConfig.url}/projects` },
  openGraph: {
    title: `Case Studies & Systems | ${siteConfig.name}`,
    description:
      'Explore our engineering case studies — scalable web architectures, resilient mobile systems, and mission-critical digital platforms.',
    url: `${siteConfig.url}/projects`,
  },
};

const collectionSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: `Case Studies | ${siteConfig.name}`,
  url: `${siteConfig.url}/projects`,
  description: metadata.description,
  mainEntity: {
    '@type': 'ItemList',
    itemListElement: [...webProjects, ...mobileProjects].map((project, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      url: `${siteConfig.url}/projects/${project.id}`,
      name: project.title,
    })),
  },
};

export default function ProjectsPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-gray-50/30">
      <JsonLd data={collectionSchema} />

      <div className="container-main">
        {/* Page Header */}
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-wider text-accent1 px-3 py-1.5 rounded-full bg-accent1/10 mb-4 inline-block">
            Engineering Track Record
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-text-dark tracking-tight mb-4">
            Production Case Studies & Systems
          </h1>
          <p className="text-base md:text-lg text-text-muted leading-relaxed">
            A curated portfolio of high-throughput web platforms, zero-trust mobile solutions, and
            distributed systems built for growing startups and established enterprises.
          </p>
        </div>

        {/* Web Case Studies */}
        <section aria-labelledby="web-heading" className="mb-20">
          <div className="flex items-center justify-between pb-4 border-b border-gray-200 mb-8">
            <h2 id="web-heading" className="text-2xl font-bold text-text-dark">
              Web & Cloud Platforms
            </h2>
            <span className="text-xs text-text-muted font-medium">{webProjects.length} Selected Engagements</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {webProjects.map((project) => (
              <Link
                key={project.id}
                href={`/projects/${project.id}`}
                className="group relative rounded-2xl overflow-hidden bg-white shadow-card hover:shadow-card-hover
                           hover:-translate-y-2 transition-all duration-500 ease-out border border-gray-100 flex flex-col h-full"
              >
                <div className="relative h-56 md:h-60 overflow-hidden bg-gray-100 shrink-0">
                  <Image
                    src={project.image}
                    alt={`${project.title} preview`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-base/70 via-base/20 to-transparent
                                  opacity-0 group-hover:opacity-100 transition-opacity duration-400
                                  flex items-end justify-between p-6">
                    <span className="text-white text-xs font-semibold px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-md">
                      {project.industry}
                    </span>
                    <span className="text-white text-sm font-medium flex items-center gap-1.5 backdrop-blur-md bg-accent1 px-4 py-2 rounded-xl">
                      Read Case Study <ArrowRight size={14} />
                    </span>
                  </div>
                </div>

                <div className="p-7 flex flex-col flex-grow">
                  <div className="flex items-center justify-between mb-3 text-xs">
                    <span className="font-semibold uppercase tracking-wider text-accent1">{project.industry}</span>
                    <span className="text-text-muted">{project.clientType}</span>
                  </div>

                  <h3 className="text-xl font-bold text-text-dark mb-3 group-hover:text-accent1 transition-colors leading-snug">
                    {project.title}
                  </h3>

                  <p className="text-text-muted text-sm leading-relaxed mb-5 line-clamp-2">
                    {project.summary || project.description}
                  </p>

                  {/* Top Metric */}
                  {project.metrics && project.metrics.length > 0 && (
                    <div className="mb-5 p-3 rounded-xl bg-accent1/5 border border-accent1/10 flex items-start gap-2">
                      <CheckCircle2 size={15} className="text-accent1 shrink-0 mt-0.5" />
                      <span className="text-xs font-semibold text-text-dark">{project.metrics[0]}</span>
                    </div>
                  )}

                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {(project.tags || []).slice(0, 3).map((tag) => (
                      <Badge key={tag} variant="default" className="text-xs bg-gray-100 text-text-dark border-gray-200">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="mt-auto pt-4 border-t border-gray-100 flex items-center text-sm font-semibold text-accent1 group-hover:text-accent2 transition-colors">
                    <span>Explore Full Case Study</span>
                    <ArrowRight size={15} className="ml-2 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Mobile Case Studies */}
        <section aria-labelledby="mobile-heading" className="mb-20">
          <div className="flex items-center justify-between pb-4 border-b border-gray-200 mb-8">
            <h2 id="mobile-heading" className="text-2xl font-bold text-text-dark">
              Mobile Systems & Native Applications
            </h2>
            <span className="text-xs text-text-muted font-medium">{mobileProjects.length} Selected Engagements</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {mobileProjects.map((project) => (
              <Link
                key={project.id}
                href={`/projects/${project.id}`}
                className="group rounded-2xl bg-white p-6 shadow-card hover:shadow-card-hover border border-gray-100 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5"
              >
                <div>
                  <div className="relative w-full aspect-[9/14] rounded-2xl overflow-hidden bg-gray-100 mb-5 border-2 border-gray-100">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 25vw"
                    />
                  </div>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-accent1 block mb-1.5">
                    {project.industry}
                  </span>
                  <h3 className="text-base font-bold text-text-dark mb-2 group-hover:text-accent1 transition-colors leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-xs text-text-muted line-clamp-2 leading-relaxed mb-4">
                    {project.summary || project.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-xs font-semibold text-accent1">
                  <span>View Details</span>
                  <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Bottom Banner */}
        <div className="p-8 md:p-12 rounded-3xl bg-white border border-gray-200 shadow-sm text-center max-w-3xl mx-auto">
          <ShieldCheck size={36} className="text-accent1 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-text-dark mb-3">Enterprise Governance & Confidentiality</h2>
          <p className="text-sm text-text-muted leading-relaxed mb-6">
            Due to client non-disclosure agreements, certain proprietary algorithms, enterprise ERP integrations,
            and infrastructure diagrams are kept confidential. Live code walkthroughs and architectural audits
            can be conducted under mutual NDA.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold bg-accent1 text-white hover:bg-accent2 transition-all shadow-accent"
          >
            <Mail size={16} />
            <span>Request Architecture Deep-Dive</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
