'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import ThreeCanvas from '@/components/three/ThreeCanvas';
import HeroModel from '@/components/three/HeroModel';
import Navbar from '@/components/navigation/Navbar';
import Footer from '@/components/navigation/Footer';
import '../app/globals.css';

export default function Home() {
  // Add a state to track if the page has loaded
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section with Three.js */}
      <section className="relative h-screen flex items-center justify-center">
        <ThreeCanvas className="absolute inset-0">
          <HeroModel />
        </ThreeCanvas>
        
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              Hello, I&apos;m <span className="text-accent">Your Name</span>
            </h1>
            <p className="text-xl sm:text-2xl mb-8">
              Frontend Developer & 3D Enthusiast
            </p>
            <motion.button
              className="px-6 py-3 bg-primary text-white rounded-md font-medium hover:bg-blue-600 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </motion.button>
          </motion.div>
        </div>
      </section>
      
      {/* About Preview Section */}
      <section className="content-section">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-3xl font-bold mb-6">About Me</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-lg mb-4">
                I&apos;m a passionate web developer specializing in creating interactive 
                and visually appealing digital experiences. With expertise in React, 
                Next.js, and Three.js, I blend traditional web development with 
                cutting-edge 3D technology.
              </p>
              <p className="text-lg mb-4">
                My approach focuses on creating performance-optimized, accessible, 
                and user-friendly websites that leave a lasting impression.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <div className="w-64 h-64 rounded-full bg-accent/20 flex items-center justify-center">
                <span className="text-lg font-medium">Your Photo Here</span>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
      
      {/* Skills Section */}
      <section className="content-section bg-black/30">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center">My Skills</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {['JavaScript', 'React', 'Next.js', 'Three.js', 'CSS/SCSS', 'HTML5', 'Node.js', 'Git'].map((skill, index) => (
              <motion.div 
                key={skill}
                className="bg-background p-4 rounded-lg text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <p className="font-medium">{skill}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
      
      {/* Projects Preview */}
      <section className="content-section">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Featured Projects</h2>
            <a href="/projects" className="text-accent hover:underline">View All</a>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1, 2].map((project) => (
              <motion.div 
                key={project}
                className="bg-black/20 rounded-lg overflow-hidden"
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="h-48 bg-gray-800 flex items-center justify-center">
                  <span>Project Image</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Project {project}</h3>
                  <p className="text-gray-300 mb-4">
                    A short description of the project and what technologies were used.
                  </p>
                  <div className="flex space-x-2">
                    <span className="px-2 py-1 bg-accent/20 rounded text-xs">React</span>
                    <span className="px-2 py-1 bg-accent/20 rounded text-xs">Three.js</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
      
      {/* Contact Preview */}
      <section className="content-section bg-black/30">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Let&apos;s Work Together</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            I&apos;m currently available for freelance work and opportunities.
            If you have a project in mind or just want to chat, feel free to contact me.
          </p>
          <motion.button
            className="px-6 py-3 bg-accent text-white rounded-md font-medium hover:bg-blue-400 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get In Touch
          </motion.button>
        </motion.div>
      </section>
      
      <Footer />
    </div>
  );
}