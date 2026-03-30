import { webProjects, mobileProjects } from '@/data/projects';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';

export async function generateMetadata({ params }) {
  const allProjects = [...webProjects, ...mobileProjects];
  const project = allProjects.find(p => p.id.toString() === params.id);
  
  if (!project) return { title: 'Project Not Found' };
  
  return {
    title: project.title,
    description: project.description,
  };
}

export default function ProjectPage({ params }) {
  const allProjects = [...webProjects, ...mobileProjects];
  const project = allProjects.find(p => p.id.toString() === params.id);

  if (!project) {
    notFound();
  }

  return (
    <div className="pt-32 pb-16 min-h-screen bg-gray-50/30">
      <div className="container-main">
        {/* Back Button */}
        <Link 
          href="/#projects"
          className="inline-flex items-center gap-2 text-text-muted hover:text-accent1 transition-colors mb-10
                     px-4 py-2 rounded-lg hover:bg-white shadow-sm border border-transparent hover:border-gray-100"
        >
          <ArrowLeft size={16} />
          <span className="font-medium">Back to Projects</span>
        </Link>
        
        {/* Project Header */}
        <div className="mb-14">
          <h1 className="text-4xl md:text-6xl font-extrabold text-text-dark mb-6 tracking-tight drop-shadow-sm">
            {project.title}
          </h1>
          <div className="flex flex-wrap gap-3 mb-8">
            {project.tags.map(tag => (
              <Badge key={tag} variant="default" className="text-sm px-3 py-1 bg-accent1/10 text-accent1 border-none">{tag}</Badge>
            ))}
          </div>
          <p className="text-xl md:text-2xl text-text-muted max-w-4xl leading-relaxed font-light">
            {project.description}
          </p>
          
          {project.link && (
            <a 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-8 px-8 py-4 bg-gradient-to-r from-accent1 to-accent2 text-white font-semibold rounded-xl hover:shadow-accent-lg transition-all transform hover:-translate-y-1"
            >
              <ExternalLink size={18} />
              Visit Live Project
            </a>
          )}
        </div>
        
        {/* Project Image */}
        <div className={`relative w-full rounded-3xl overflow-hidden shadow-2xl bg-white border border-gray-100/50 flex items-center justify-center p-4 md:p-12
                         ${project.type === 'mobile' ? 'aspect-[4/3] md:aspect-video bg-gray-100' : 'aspect-video md:aspect-[21/9]'}`}>
          <div className={`relative w-full h-full ${project.type === 'mobile' ? 'max-w-sm mx-auto' : ''}`}>
             <Image 
              src={project.image} 
              alt={project.title}
              fill
              className={`object-contain drop-shadow-xl ${project.type === 'mobile' ? 'scale-105' : ''}`}
              sizes="(max-width: 1200px) 100vw, 1200px"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}
