import React from "react";
import type { Project } from "../../../types";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all bg-white dark:bg-gray-800">
      {/* Görsel */}
      {project.image_link && (
        <img
          src={project.image_link}
          alt={project.title}
          className="w-full h-48 object-cover"
        />
      )}

      {/* İçerik */}
      <div className="p-4 space-y-3">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
          {project.title}
        </h2>

        <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-3">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mt-2">
          
        </div>

        {/* Linkler */}
        <div className="flex gap-4 mt-3">
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline text-sm"
            >
              <FaExternalLinkAlt /> Live
            </a>
          )}
          {project.repo_link && (
            <a
              href={project.repo_link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:underline text-sm"
            >
              <FaGithub /> Repo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
