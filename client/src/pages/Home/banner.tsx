import React from "react";
import Button from "../../components/Button";

const Banner: React.FC = () => {
  return (
    <div className="flex items-center justify-center md:h-[720px] h-[900px]  bg-gradient-to-b from-zinc-200 to-gray-300 dark:from-gray-800 dark:to-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
          {/* Sol taraf - yazılar */}
          <div className="flex flex-col gap-y-4 text-center md:text-left">
            <span className="text-blue-600 dark:text-blue-400 font-medium text-lg ">
              👋 Hello
            </span>
            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
              I am <span className="text-blue-600 dark:text-blue-400">Batuhan Kanra</span> <br />
              Full-Stack Developer
            </h1>
            <p className="text-gray-700 dark:text-gray-300 max-w-md">
              I develop modern web technologies and powerful, scalable and user-oriented software solutions.
            </p>
            <div className="mt-4 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
             
              <Button>
                My projects
              </Button>
              <Button variant="secondary">
                Communication
              </Button>
            </div>
          </div>

          {/* Sağ taraf - fotoğraf */}
          <div className="flex justify-center md:justify-end">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden shadow-lg border-4 border-white dark:border-gray-800">
              {/* Buraya kendi fotoğrafını ekle */}
              <img
                src="/me.jpg" // kendi fotoğrafının yolunu buraya koy
                alt="Batuhan Kanra"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
