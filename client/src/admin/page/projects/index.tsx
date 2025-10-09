import React from "react";
import { useAppDispatch, useAppSelector } from "../../../store/hook";
import { getProjects } from "../../../store/features/projects";
import ProjectCard from "./projectCard";

const Projects = () => {
  const dispatch = useAppDispatch();
  const { projects, error, status } = useAppSelector((state) => state.projects);

  React.useEffect(() => {
    dispatch(getProjects());
  }, [dispatch]);

  if (status === "Loading") return <p>Yükleniyor...</p>;
  if (status === "Error") return <p className="text-red-500">{error}</p>;

  return (
    <div className="space-y-6 container mx-auto py-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
          Proje Yönetimi
        </h1>
      </div>

      {projects.length === 0 && (
        <p className="text-gray-500 dark:text-gray-400">
          Henüz proje eklenmemiş.
        </p>
      ) }
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {status==="Success" && projects.map((project,i) => (
            <ProjectCard key={i} project={project} />
          ))}
        </div>
      
    </div>
  );
};

export default Projects;
