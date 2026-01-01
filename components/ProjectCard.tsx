import Link from 'next/link';
import { Project } from '@/data/projects';

interface ProjectCardProps {
  project: Project;
  viewMode: 'grid' | 'list';
}

export default function ProjectCard({ project, viewMode }: ProjectCardProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-green-500';
      case 'paused':
        return 'bg-yellow-500';
      case 'archived':
        return 'bg-gray-500';
      default:
        return 'bg-gray-500';
    }
  };

  if (viewMode === 'list') {
    return (
      <Link href={`/project/${project.id}`}>
        <div className="bg-gray-900 border border-gray-800 rounded-lg p-4 hover:border-blue-500 transition-colors cursor-pointer">
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <h3 className="text-lg font-semibold text-white">{project.name}</h3>
                <span className={`w-2 h-2 rounded-full ${getStatusColor(project.status)}`}></span>
                <span className="text-xs text-gray-400 capitalize">{project.status}</span>
              </div>
              <p className="text-gray-400 text-sm mb-2">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 bg-blue-500/10 text-blue-400 text-xs rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="text-right text-sm">
              <div className="text-gray-400">
                <span className="text-white font-medium">{project.framework}</span>
              </div>
              <div className="text-gray-500 mt-1">{project.deployments} deployments</div>
              <div className="text-gray-500 mt-1">Last: {project.lastDeployed}</div>
            </div>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link href={`/project/${project.id}`}>
      <div className="bg-gray-900 border border-gray-800 rounded-lg p-5 hover:border-blue-500 transition-colors cursor-pointer h-full flex flex-col">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-lg font-semibold text-white">{project.name}</h3>
          <span className={`w-2 h-2 rounded-full ${getStatusColor(project.status)} mt-2`}></span>
        </div>
        <p className="text-gray-400 text-sm mb-3 flex-1">{project.description}</p>
        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-500">Framework:</span>
            <span className="text-white font-medium">{project.framework}</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-500">Deployments:</span>
            <span className="text-white">{project.deployments}</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-500">Last deployed:</span>
            <span className="text-white">{project.lastDeployed}</span>
          </div>
        </div>
        <div className="flex flex-wrap gap-2 mt-3 pt-3 border-t border-gray-800">
          {project.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 bg-blue-500/10 text-blue-400 text-xs rounded-md"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
