import { notFound } from 'next/navigation';
import Link from 'next/link';
import { projects } from '@/data/projects';

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

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

  const getStatusTextColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'text-green-400';
      case 'paused':
        return 'text-yellow-400';
      case 'archived':
        return 'text-gray-400';
      default:
        return 'text-gray-400';
    }
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <header className="border-b border-gray-800 bg-gray-900/50 backdrop-blur-sm">
        <div className="max-w-5xl mx-auto px-6 py-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to Dashboard
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-6 py-12">
        {/* Project Header */}
        <div className="mb-8">
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <h1 className="text-4xl font-bold text-white mb-2">{project.name}</h1>
              <p className="text-xl text-gray-400">{project.description}</p>
            </div>
            <div className="flex items-center gap-2">
              <span className={`w-3 h-3 rounded-full ${getStatusColor(project.status)}`}></span>
              <span className={`text-sm font-medium capitalize ${getStatusTextColor(project.status)}`}>
                {project.status}
              </span>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-4">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-blue-500/10 text-blue-400 text-sm rounded-md"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Project Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Info Card */}
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
            <h2 className="text-lg font-semibold text-white mb-4">Project Information</h2>
            <div className="space-y-4">
              <div>
                <span className="text-gray-400 text-sm">Framework</span>
                <p className="text-white font-medium mt-1">{project.framework}</p>
              </div>
              <div>
                <span className="text-gray-400 text-sm">Total Deployments</span>
                <p className="text-white font-medium mt-1">{project.deployments}</p>
              </div>
              <div>
                <span className="text-gray-400 text-sm">Last Deployed</span>
                <p className="text-white font-medium mt-1">{project.lastDeployed}</p>
              </div>
              {project.repository && (
                <div>
                  <span className="text-gray-400 text-sm">Repository</span>
                  <p className="text-blue-400 font-medium mt-1">{project.repository}</p>
                </div>
              )}
            </div>
          </div>

          {/* Deployment Card */}
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
            <h2 className="text-lg font-semibold text-white mb-4">Deployment</h2>
            <div className="space-y-4">
              {project.url ? (
                <>
                  <div>
                    <span className="text-gray-400 text-sm">Production URL</span>
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 font-medium mt-1 block break-all"
                    >
                      {project.url}
                    </a>
                  </div>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                  >
                    Visit Site
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                </>
              ) : (
                <p className="text-gray-500 italic">No production deployment</p>
              )}
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
          <h2 className="text-lg font-semibold text-white mb-4">Recent Activity</h2>
          <div className="space-y-4">
            <div className="flex items-start gap-4 pb-4 border-b border-gray-800">
              <div className="w-2 h-2 rounded-full bg-green-500 mt-2"></div>
              <div className="flex-1">
                <p className="text-white font-medium">Deployment successful</p>
                <p className="text-gray-400 text-sm mt-1">
                  Production deployment completed successfully
                </p>
                <p className="text-gray-500 text-xs mt-1">{project.lastDeployed}</p>
              </div>
            </div>
            <div className="flex items-start gap-4 pb-4 border-b border-gray-800">
              <div className="w-2 h-2 rounded-full bg-blue-500 mt-2"></div>
              <div className="flex-1">
                <p className="text-white font-medium">Build started</p>
                <p className="text-gray-400 text-sm mt-1">
                  Building your project with {project.framework}
                </p>
                <p className="text-gray-500 text-xs mt-1">{project.lastDeployed}</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-2 h-2 rounded-full bg-gray-500 mt-2"></div>
              <div className="flex-1">
                <p className="text-white font-medium">Repository updated</p>
                <p className="text-gray-400 text-sm mt-1">
                  Latest changes pushed to repository
                </p>
                <p className="text-gray-500 text-xs mt-1">{project.lastDeployed}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
