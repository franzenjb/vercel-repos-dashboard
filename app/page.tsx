'use client';

import { useState, useMemo } from 'react';
import ProjectCard from '@/components/ProjectCard';
import FilterSidebar from '@/components/FilterSidebar';
import { projects } from '@/data/projects';

export default function Home() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFramework, setSelectedFramework] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  // Extract unique frameworks and tags
  const frameworks = useMemo(() => {
    const uniqueFrameworks = new Set(projects.map((p) => p.framework));
    return Array.from(uniqueFrameworks).sort();
  }, []);

  const allTags = useMemo(() => {
    const uniqueTags = new Set(projects.flatMap((p) => p.tags));
    return Array.from(uniqueTags).sort();
  }, []);

  // Filter projects
  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      // Search filter
      if (searchQuery && !project.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
          !project.description.toLowerCase().includes(searchQuery.toLowerCase())) {
        return false;
      }

      // Framework filter
      if (selectedFramework !== 'all' && project.framework !== selectedFramework) {
        return false;
      }

      // Status filter
      if (selectedStatus !== 'all' && project.status !== selectedStatus) {
        return false;
      }

      // Tags filter
      if (selectedTags.length > 0 && !selectedTags.some((tag) => project.tags.includes(tag))) {
        return false;
      }

      return true;
    });
  }, [searchQuery, selectedFramework, selectedStatus, selectedTags]);

  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <header className="border-b border-gray-800 bg-gray-900/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="max-w-[1600px] mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-white">Vercel Repos Dashboard</h1>
              <p className="text-gray-400 text-sm mt-1">
                Manage and monitor your {projects.length} Vercel projects
              </p>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-400">
                {filteredProjects.length} {filteredProjects.length === 1 ? 'project' : 'projects'}
              </span>
              <div className="flex items-center gap-2 bg-gray-800 rounded-lg p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded transition-colors ${
                    viewMode === 'grid'
                      ? 'bg-blue-500 text-white'
                      : 'text-gray-400 hover:text-white'
                  }`}
                  aria-label="Grid view"
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
                      d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                    />
                  </svg>
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded transition-colors ${
                    viewMode === 'list'
                      ? 'bg-blue-500 text-white'
                      : 'text-gray-400 hover:text-white'
                  }`}
                  aria-label="List view"
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
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-[1600px] mx-auto px-6 py-8">
        <div className="flex gap-8">
          {/* Sidebar */}
          <aside className="w-80 flex-shrink-0 hidden lg:block">
            <FilterSidebar
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              selectedFramework={selectedFramework}
              setSelectedFramework={setSelectedFramework}
              selectedStatus={selectedStatus}
              setSelectedStatus={setSelectedStatus}
              selectedTags={selectedTags}
              setSelectedTags={setSelectedTags}
              frameworks={frameworks}
              allTags={allTags}
            />
          </aside>

          {/* Projects Grid/List */}
          <main className="flex-1">
            {filteredProjects.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-gray-400 text-lg">No projects found matching your filters</p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedFramework('all');
                    setSelectedStatus('all');
                    setSelectedTags([]);
                  }}
                  className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                >
                  Clear filters
                </button>
              </div>
            ) : (
              <div
                className={
                  viewMode === 'grid'
                    ? 'grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6'
                    : 'flex flex-col gap-4'
                }
              >
                {filteredProjects.map((project) => (
                  <ProjectCard key={project.id} project={project} viewMode={viewMode} />
                ))}
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
