import { webProjects, mobileProjects } from '@/data/projects';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, CheckCircle2, ShieldCheck, Zap, Layers, Mail } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { JsonLd } from '@/components/seo/JsonLd';
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
  if (!project) return { title: 'Case Study Not Found' };

  return {
    title: `${project.title} — Case Study`,
    description: project.summary || project.description,
    alternates: { canonical: `${siteConfig.url}/projects/${project.id}` },
    openGraph: {
      title: `${project.title} | ${siteConfig.name} Case Study`,
      description: project.summary || project.description,
      url: `${siteConfig.url}/projects/${project.id}`,
      siteName: siteConfig.name,
      images: [{ url: project.image, alt: project.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${project.title} | ${siteConfig.name}`,
      description: project.summary || project.description,
      images: [project.image],
    },
  };
}

export default function ProjectPage({ params }) {
  const project = [...webProjects, ...mobileProjects].find(
    (p) => p.id === params.slug
  );

  if (!project) notFound();

  const isMobile = project.type === 'mobile';
  const projectUrl = `${siteConfig.url}/projects/${project.id}`;

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: siteConfig.url,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Case Studies',
        item: `${siteConfig.url}/projects`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: project.title,
        item: projectUrl,
      },
    ],
  };

  const projectSchema = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: project.title,
    description: project.summary || project.description,
    url: projectUrl,
    image: `${siteConfig.url}${project.image}`,
    author: {
      '@type': 'Organization',
      name: siteConfig.name,
      url: siteConfig.url,
    },
  };

  return (
    <div className="pt-32 pb-24 min-h-screen bg-gray-50/40">
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={projectSchema} />

      <div className="container-main">
        {/* Navigation / Breadcrumb */}
        <div className="flex items-center justify-between mb-8">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-text-muted hover:text-accent1 transition-colors
                       px-4 py-2 rounded-xl bg-white shadow-sm border border-gray-100 font-medium text-sm"
          >
            <ArrowLeft size={16} />
            <span>Back to All Case Studies</span>
          </Link>
          <span className="text-xs font-semibold px-3 py-1.5 rounded-full bg-accent1/10 text-accent1 uppercase tracking-wider">
            {project.industry || 'Architecture Case Study'}
          </span>
        </div>

        {/* Hero Section */}
        <div className="mb-14">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <Badge variant="default" className="text-xs px-3 py-1 bg-accent1/10 text-accent1 border-none font-semibold">
              {project.industry}
            </Badge>
            <span className="text-xs text-text-muted">Client: {project.clientType || 'Enterprise Client'}</span>
          </div>

          <h1 className="text-3xl md:text-5xl font-extrabold text-text-dark tracking-tight mb-6 leading-tight max-w-4xl">
            {project.title}
          </h1>

          <p className="text-lg md:text-xl text-text-muted max-w-3xl leading-relaxed">
            {project.summary || project.description}
          </p>
        </div>

        {/* 3-Pillar Architecture Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {/* 1. Challenge */}
          <div className="p-7 rounded-2xl bg-white shadow-card border border-gray-100 flex flex-col">
            <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center text-red-600 mb-5">
              <Zap size={22} />
            </div>
            <h2 className="text-lg font-bold text-text-dark mb-3">The Challenge</h2>
            <p className="text-sm text-text-muted leading-relaxed flex-grow">
              {project.challenge || 'Solving complex throughput limitations, security compliance, and user concurrency bottlenecks in high-demand environments.'}
            </p>
          </div>

          {/* 2. Architecture & Solution */}
          <div className="p-7 rounded-2xl bg-white shadow-card border border-gray-100 flex flex-col">
            <div className="w-12 h-12 rounded-xl bg-accent1/10 flex items-center justify-center text-accent1 mb-5">
              <Layers size={22} />
            </div>
            <h2 className="text-lg font-bold text-text-dark mb-3">Engineered Solution</h2>
            <p className="text-sm text-text-muted leading-relaxed flex-grow">
              {project.solution || 'Designed an event-driven, decoupled system with resilient fallback handling, distributed caching, and end-to-end security.'}
            </p>
          </div>

          {/* 3. Measurable Impact */}
          <div className="p-7 rounded-2xl bg-white shadow-card border border-gray-100 flex flex-col">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-600 mb-5">
              <ShieldCheck size={22} />
            </div>
            <h2 className="text-lg font-bold text-text-dark mb-3">Key Outcomes</h2>
            <ul className="space-y-3 flex-grow">
              {(project.metrics || ['High availability architecture', 'Strict data governance adherence', 'Measurable ROI on operational overhead']).map((metric, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs text-text-dark font-medium leading-relaxed">
                  <CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                  <span>{metric}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Tech Stack Bar */}
        <div className="p-6 rounded-2xl bg-white shadow-card border border-gray-100 mb-16">
          <h2 className="text-xs font-bold uppercase tracking-wider text-text-muted mb-4">
            Technologies & Frameworks Deployed
          </h2>
          <div className="flex flex-wrap gap-2">
            {(project.techStack || project.tags || []).map((tech) => (
              <span
                key={tech}
                className="px-3.5 py-1.5 rounded-xl bg-gray-100/80 text-text-dark text-xs font-semibold border border-gray-200/60"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Visual Gallery */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold text-text-dark mb-8">System Interface & Architectural Artifacts</h2>
          {isMobile ? (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 justify-items-center">
              {(project.screenshots || [project.image]).map((src, index) => (
                <div key={index} className="w-full flex justify-center">
                  <div className="relative w-full max-w-[220px] aspect-[9/18] rounded-[2rem] overflow-hidden shadow-card border-[6px] border-white bg-white">
                    <Image
                      src={src}
                      alt={`${project.title} screen ${index + 1}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 50vw, 25vw"
                      priority={index < 2}
                    />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="w-full rounded-2xl overflow-hidden shadow-2xl border border-gray-200/70 bg-white">
              <Image
                src={project.image}
                alt={`${project.title} Preview`}
                width={1664}
                height={1080}
                className="w-full h-auto"
                sizes="(max-width: 1024px) 100vw, 1200px"
                priority
              />
            </div>
          )}
        </div>

        {/* Executive Consultation CTA Card */}
        <div className="p-10 md:p-14 rounded-3xl bg-gradient-hero text-white text-center relative overflow-hidden shadow-xl">
          <div className="relative z-10 max-w-2xl mx-auto">
            <span className="text-xs font-semibold uppercase tracking-wider text-accent3 mb-3 block">
              Architectural Advisory
            </span>
            <h2 className="text-2xl md:text-4xl font-extrabold mb-4">
              Planning a Similar System for Your Enterprise?
            </h2>
            <p className="text-white/70 text-sm md:text-base leading-relaxed mb-8">
              We provide end-to-end consulting, technical auditing, and turnkey engineering.
              Detailed architecture diagrams and reference implementations are available under mutual NDA.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-sm
                           bg-white text-text-dark hover:bg-gray-100 transition-all shadow-md group"
              >
                <Mail size={16} />
                <span>Discuss Your Project Requirements</span>
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
