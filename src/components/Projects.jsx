import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiFirebase,
  SiMongodb,
  SiExpress,
} from "react-icons/si";

import project1 from '../assets/project1.png';
import project2 from '../assets/project2.png';
import project3 from '../assets/projects3.png';

// Icon mapping by tech name
const techIcons = {
  React: <FaReact className="text-cyan-400" title="React" />,
  "Tailwind CSS": <SiTailwindcss className="text-teal-400" title="Tailwind CSS" />,
  "Node.js": <FaNodeJs className="text-green-500" title="Node.js" />,
  Express: <SiExpress className="text-gray-400" title="Express.js" />,
  MongoDB: <SiMongodb className="text-green-600" title="MongoDB" />,
  Firebase: <SiFirebase className="text-yellow-500" title="Firebase" />,
};

const projectsData = [
  {
    id: 1,
    name: "DocTalk",
    image: project1,
    techStack: ["React", "Tailwind CSS"],
    description:
      "An online auction platform where users can bid on art pieces in real-time.",
    liveLink: "https://bd-doc-talk.netlify.app/",
    githubClient:
      "https://github.com/programming-hero-web-course1/b11a8-router-booking-souravMitra02",
    challenges:
      "Implementing real-time bidding and ensuring data consistency were challenging.",
    improvements: "Plan to add push notifications and advanced search filters.",
  },
  {
    id: 2,
    name: "Tech-haat",
    image: project2,
    techStack: ["React", "Node.js", "Express", "MongoDB"],
    description:
      "A platform to find compatible roommates with authentication and CRUD features.",
    liveLink: "https://tech-haat.web.app",
    githubClient: "https://github.com/souravMitra02/tech-haat",
    challenges:
      "Managing protected routes and complex CRUD operations was tough initially.",
    improvements: "Adding chat functionality and better matching algorithms.",
  },
  {
    id: 3,
    name: "Find-mate",
    image: project3,
    techStack: ["React", "Firebase", "Tailwind CSS", "MongoDB", "Express", "Node.js"],
    description:
      "Manage volunteer events and registrations with user-friendly UI.",
    liveLink: "https://find-mate.netlify.app/",
    githubClient: "https://github.com/souravMitra02/find-mate-client",
    challenges:
      "Integrating authentication with role-based access control took some time.",
    improvements: "Introduce analytics dashboard and mobile app support.",
  },
];

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center p-4 z-50">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="bg-[#1B1E22] rounded-lg max-w-3xl w-full p-6 relative shadow-lg"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white text-2xl font-bold hover:text-pink-500"
          aria-label="Close Modal"
        >
          &times;
        </button>
        <h2 className="text-3xl font-bold text-white mb-4">{project.name}</h2>
        <img
          src={project.image}
          alt={project.name}
          className="w-full rounded-lg mb-6 object-cover max-h-64"
        />
        <p className="text-gray-300 mb-3">
          <strong>Technology Stack:</strong>{" "}
          <span className="flex gap-2 mt-2 flex-wrap">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="flex items-center gap-1 bg-gray-800 px-2 py-1 rounded text-sm"
                title={tech}
              >
                {techIcons[tech] || tech} <span>{tech}</span>
              </span>
            ))}
          </span>
        </p>
        <p className="text-gray-300 mb-3">{project.description}</p>
        <p className="text-gray-300 mb-3">
          <strong>Challenges Faced:</strong> {project.challenges}
        </p>
        <p className="text-gray-300 mb-6">
          <strong>Future Improvements:</strong> {project.improvements}
        </p>
        <div className="flex gap-4 flex-wrap">
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-pink-600 rounded hover:bg-pink-700 transition text-white font-semibold"
          >
            Live Project
          </a>
          <a
            href={project.githubClient}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-gray-700 rounded hover:bg-gray-600 transition text-white font-semibold"
          >
            GitHub Client
          </a>
        </div>
      </motion.div>
    </div>
  );
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section
      id="projects"
      className="bg-[#1B1E22] py-16 px-4 md:px-12 text-white max-w-7xl mx-auto"
    >
      <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>

      <div className="flex flex-col gap-10">
        {projectsData.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="flex flex-col md:flex-row bg-[#212428] rounded-lg shadow-lg overflow-hidden"
          >
            {/* Image Section Left */}
            <motion.img
              src={project.image}
              alt={project.name}
              className="md:w-1/2 w-full h-56 md:h-auto object-cover"
              initial={{ scale: 0.9 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />

            {/* Content Section Right */}
            <div className="md:w-1/2 p-6 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-semibold mb-3">{project.name}</h3>
                <div className="flex flex-wrap gap-3 mb-4">
                  {project.techStack.map((tech) => (
                    <div
                      key={tech}
                      className="flex items-center gap-1 bg-gray-800 px-3 py-1 rounded text-sm"
                      title={tech}
                    >
                      {techIcons[tech] || tech}
                      <span className="text-white">{tech}</span>
                    </div>
                  ))}
                </div>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <p className="text-gray-300 mb-4">
                  <strong>Challenges:</strong> {project.challenges}
                </p>
                <p className="text-gray-300 mb-6">
                  <strong>Future Improvements:</strong> {project.improvements}
                </p>
              </div>

              <div className="flex gap-4 flex-wrap">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2 bg-pink-600 rounded hover:bg-pink-700 transition text-white font-semibold"
                >
                  Live Project
                </a>
                <button
                  onClick={() => setSelectedProject(project)}
                  className="px-5 py-2 bg-gray-700 rounded hover:bg-gray-600 transition text-white font-semibold"
                >
                  View Details
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal for Project Details */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};

export default Projects;
