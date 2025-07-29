
import React from 'react';
import { PROJECTS } from '../constants';
import { ExternalLink } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-white">Projects</h2>
        <div className="w-20 h-1 bg-[#1DB954] mt-2 rounded-full"></div>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PROJECTS.map((project, index) => (
          <div key={index} className="bg-[#1a1a1a] p-6 rounded-lg border border-gray-800/50 hover:border-gray-700 transition-all flex flex-col justify-between">
            <div>
                <h3 className="text-lg font-bold text-white mb-2 flex justify-between items-center">
                    {project.name}
                    {project.link && (
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#1DB954] transition-colors">
                            <ExternalLink size={20} />
                        </a>
                    )}
                </h3>
                <p className="text-gray-400 text-sm mb-4">{project.description}</p>
            </div>
            <div className="flex flex-wrap gap-2 mt-auto">
              {project.tech.map((tech, i) => (
                <span key={i} className="bg-gray-700/50 text-gray-300 text-xs font-medium px-2.5 py-1 rounded-full">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
