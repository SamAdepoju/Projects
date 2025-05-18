"use client";

import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "RFM Analysis",
    description:
      "A customer segmentation system powered by RFM analysis that cleans and transforms retail data, ranks customers by behavior, and visualizes insights to boost marketing efficiency and ROI.",
    imageUrl: "/rfm analysis.webp",
    isFeatured: true,
    liveUrl: "https://medium.com/@samueladekunle75/rfm-analysis-b86d1c6b5a5a",
    technologies: ["Microsoft Excel", "SQL"],
    gradientColors: {
      firstColor: "255, 65, 108",
      secondColor: "255, 75, 43",
      thirdColor: "255, 169, 61",
    },
  },
  {
    title: "SZA LLC’s SQL project",
    description:
      "A SQL-powered analytics engine that transforms raw sales data into actionable insights—tracking revenue, customer behavior, returns, and growth trends to drive smarter business decisions.",
    imageUrl: "/sql-project.gif",
    liveUrl: "https://medium.com/@samueladekunle75/sql-project-afc183adcd93",
    technologies: ["SQL", "Python", "Pandas", "Matplotlib"],
    gradientColors: {
      firstColor: "255, 65, 108",
      secondColor: "255, 75, 43",
      thirdColor: "255, 169, 61",
    },
  },
];

function Projects() {
  return (
    <section id="projects" className="py-16 md:py-20 px-4">
      <div className="text-center mb-12 md:mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-3 md:mb-4">
          My Projects
        </h2>
        <p className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto px-4">
          Here are some of the projects I&rsquo;ve worked on. Each project
          demonstrates different skills and technologies I&#39;ve mastered.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
