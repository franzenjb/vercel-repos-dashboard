'use client';

interface FilterSidebarProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedFramework: string;
  setSelectedFramework: (framework: string) => void;
  selectedStatus: string;
  setSelectedStatus: (status: string) => void;
  selectedTags: string[];
  setSelectedTags: (tags: string[]) => void;
  frameworks: string[];
  allTags: string[];
}

export default function FilterSidebar({
  searchQuery,
  setSearchQuery,
  selectedFramework,
  setSelectedFramework,
  selectedStatus,
  setSelectedStatus,
  selectedTags,
  setSelectedTags,
  frameworks,
  allTags,
}: FilterSidebarProps) {
  const toggleTag = (tag: string) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((t) => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedFramework('all');
    setSelectedStatus('all');
    setSelectedTags([]);
  };

  return (
    <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 h-fit sticky top-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-white">Filters</h2>
        <button
          onClick={clearFilters}
          className="text-sm text-blue-400 hover:text-blue-300 transition-colors"
        >
          Clear all
        </button>
      </div>

      {/* Search */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-300 mb-2">Search</label>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search projects..."
          className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
        />
      </div>

      {/* Status Filter */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-300 mb-2">Status</label>
        <select
          value={selectedStatus}
          onChange={(e) => setSelectedStatus(e.target.value)}
          className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:border-blue-500 transition-colors"
        >
          <option value="all">All statuses</option>
          <option value="active">Active</option>
          <option value="paused">Paused</option>
          <option value="archived">Archived</option>
        </select>
      </div>

      {/* Framework Filter */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-300 mb-2">Framework</label>
        <select
          value={selectedFramework}
          onChange={(e) => setSelectedFramework(e.target.value)}
          className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:border-blue-500 transition-colors"
        >
          <option value="all">All frameworks</option>
          {frameworks.map((framework) => (
            <option key={framework} value={framework}>
              {framework}
            </option>
          ))}
        </select>
      </div>

      {/* Tags Filter */}
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">Tags</label>
        <div className="flex flex-wrap gap-2 max-h-64 overflow-y-auto">
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => toggleTag(tag)}
              className={`px-3 py-1 text-sm rounded-md transition-colors ${
                selectedTags.includes(tag)
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
