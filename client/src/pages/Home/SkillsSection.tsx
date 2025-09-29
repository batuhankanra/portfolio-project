import React from 'react';
import { FaReact } from "react-icons/fa";
import { SiTypescript, SiExpress, SiRedis } from "react-icons/si";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { FaNodeJs, FaGolang } from "react-icons/fa6";
import { DiMongodb } from "react-icons/di";
import { BiLogoPostgresql } from "react-icons/bi";

const SkillsSection: React.FC = () => {
  const frontend = [
    { name: "React", percentage: 95, color: "blue", icon: FaReact },
    { name: "TypeScript", percentage: 85, color: "blue", icon: SiTypescript },
    { name: "Next.js", percentage: 80, color: "purple", icon: RiNextjsFill },
    { name: "Tailwind CSS", percentage: 95, color: "green", icon: RiTailwindCssFill },
  ];

  const backend = [
    { name: "Node.js", percentage: 75, color: "green", icon: FaNodeJs },
    { name: "Express.js", percentage: 90, color: "yellow", icon: SiExpress },
    { name: "Go", percentage: 65, color: "blue", icon: FaGolang },
  ];

  const database = [
    { name: "Redis", percentage: 60, color: "red", icon: SiRedis },
    { name: "mongodb", percentage: 85, color: "green", icon: DiMongodb },
    { name: "postgresql", percentage: 70, color: "blue", icon: BiLogoPostgresql }
  ];

  const getColorClass = (color?: string) => {
    switch (color) {
      case 'blue':
        return 'from-blue-500 to-blue-600 dark:from-blue-600 dark:to-blue-700';
      case 'green':
        return 'from-green-500 to-green-600 dark:from-green-600 dark:to-green-700';
      case 'purple':
        return 'from-purple-500 to-purple-600 dark:from-purple-600 dark:to-purple-700';
      case 'red':
        return 'from-red-500 to-red-600 dark:from-red-600 dark:to-red-700';
      case 'yellow':
        return 'from-yellow-500 to-yellow-600 dark:from-yellow-600 dark:to-yellow-700';
      default:
        return 'from-indigo-500 to-indigo-600 dark:from-indigo-600 dark:to-indigo-700';
    }
  };

  // Kategori bileşeni
  const SkillCategory = ({ title, skills }: { title: string; skills: typeof frontend }) => (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 pb-2 border-b border-gray-200 dark:border-gray-700">
        {title}
      </h3>
      <div className="space-y-5">
        {skills.map((skill, index) => (
          <div key={index} className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <skill.icon className={`text-xl ${skill.color === 'blue' ? 'text-blue-500 dark:text-blue-400' : 
                  skill.color === 'green' ? 'text-green-500 dark:text-green-400' : 
                  skill.color === 'purple' ? 'text-purple-500 dark:text-purple-400' : 
                  skill.color === 'red' ? 'text-red-500 dark:text-red-400' : 
                  'text-yellow-500 dark:text-yellow-400'}`} />
                <span className="text-lg font-medium text-gray-800 dark:text-gray-200">
                  {skill.name}
                </span>
              </div>
              <span className="text-lg font-semibold text-gray-700 dark:text-gray-300">
                {skill.percentage}%
              </span>
            </div>

            {/* Progress Bar */}
            <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
              <div 
                className={`h-full rounded-full bg-gradient-to-r ${getColorClass(skill.color)} transition-all duration-1000 ease-out`}
                style={{ width: `${skill.percentage}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section className={`py-16 bg-gray-50 dark:bg-gray-900/50`}>
      <div className="container mx-auto px-4">
        {/* Başlık */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Yeteneklerim
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Full-Stack geliştirme alanındaki teknik yeteneklerim
          </p>
        </div>

        {/* Yetenek Kategorileri */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <SkillCategory title="Frontend" skills={frontend} />
          <SkillCategory title="Backend" skills={backend} />
          <SkillCategory title="Veritabanı" skills={database} />
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;