'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '@/components/navigation/Navbar';
import Footer from '@/components/navigation/Footer';

// Sample projects data
const projects = [
  {
    id: 1,
    title: "3D Interactive Portfolio",
    description: "A portfolio website with interactive 3D elements using Three.js and React. Features custom animations and responsive design.",
    tags: ["Next.js", "Three.js", "React", "3D"],
    image: "/placeholder.jpg",
    category: "web"
  },
  {
    id: 2,
    title: "E-commerce Dashboard",
    description: "Admin dashboard for an e-commerce platform with data visualization, user management, and inventory tracking features.",
    tags: ["React", "Chart.js", "Node.js", "MongoDB"],
    image: "/placeholder.jpg",
    category: "web"
  },
  {
    id: 3,
    title: "3D Product Configurator",
    description: "Interactive 3D product configurator allowing users to customize product features and view in real-time.",
    tags: ["Three.js", "WebGL", "JavaScript", "3D"],
    image: "/placeholder.jpg",
    category: "3D"
  },
  {
    id: 4,
    title: "Mobile Fitness App",
    description: "A fitness tracking application with workout routines, progress tracking, and social features.",
    tags: ["React Native", "Firebase", "Redux"],
    image: "/placeholder.jpg",
    category: "mobile"
  },
  {
    id: 5,
    title: "3D Game Environment",
    description: "A 3D game environment with custom lighting, textures, and interactive elements.",
    tags: ["Three.js", "Blender", "WebGL", "3D"],
    image: "/placeholder.jpg",
    category: "3D"
  },
  {
    id: 6,
    title: "Weather Visualization App",
    description: "A weather application with beautiful data visualizations and forecasting features.",
    tags: ["React", "D3.js", "API Integration"],
    image: "/placeholder.jpg",
    category: "web"
  }
];

export default function Projects() {
  const [filter, setFilter] = useState("all");
  
  const filteredProjects = filter === "all"
    ? projects
    : projects.filter(project => project.category === filter);
  
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Header */}
      <div className="pt-24 pb-12 md:pt-32 md:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">My Projects</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A collection of my work in web development, 3D design, and more.
            </p>
          </motion.div>
        </div>
      </div>
      
      {/* Filter */}
      <div className="content-section pb-8">
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {["all", "web", "3D", "mobile"].map((category) => (
            <motion.button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded-full ${
                filter === category 
                  ? "bg-accent text-white" 
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </motion.button>
          ))}
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="bg-black/20 rounded-lg overflow-hidden"
              >
                <div className="h-48 bg-gray-800 flex items-center justify-center">
                  <span>Project Image</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span 
                        key={tag} 
                        className="px-2 py-1 bg-accent/20 rounded text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <button className="text-accent hover:underline">View Details</button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}