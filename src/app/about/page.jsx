'use client';

import { motion } from 'framer-motion';
import Navbar from '@/components/navigation/Navbar';
import Footer from '@/components/navigation/Footer';

export default function About() {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About Me</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Get to know more about me and my journey in web development and 3D design.
            </p>
          </motion.div>
        </div>
      </div>
      
      {/* Bio Section */}
      <section className="content-section">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="w-full h-80 bg-gray-800 rounded-lg flex items-center justify-center">
              <span className="text-lg font-medium">Your Photo Here</span>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">My Journey</h2>
            <p className="text-lg mb-4">
              I'm a self-taught developer with a background in design. My journey into
              web development began when I discovered the possibilities of creating interactive
              experiences using modern web technologies.
            </p>
            <p className="text-lg mb-4">
              I'm particularly passionate about the intersection of design and development,
              where creativity meets technical implementation. This led me to explore Three.js
              and 3D web development, which allows me to create unique user experiences.
            </p>
            <p className="text-lg">
              When I'm not coding, you can find me exploring new design trends, contributing to
              open source projects, or learning about emerging technologies in the web space.
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Experience Section */}
      <section className="content-section bg-black/30">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-8">Experience</h2>
          
          <div className="space-y-8">
            {[
              { 
                position: "Senior Frontend Developer", 
                company: "Company Name", 
                period: "2020 - Present",
                description: "Led the development of interactive web applications using React and Next.js. Implemented 3D visualizations with Three.js."
              },
              { 
                position: "Web Developer", 
                company: "Another Company", 
                period: "2018 - 2020",
                description: "Developed responsive websites and web applications. Collaborated with designers to implement UI/UX improvements."
              },
              { 
                position: "Junior Developer", 
                company: "First Company", 
                period: "2016 - 2018",
                description: "Assisted in the development of web applications. Learned modern JavaScript frameworks and best practices."
              }
            ].map((job, index) => (
              <motion.div 
                key={index}
                className="bg-background p-6 rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                  <div>
                    <h3 className="text-xl font-bold">{job.position}</h3>
                    <p className="text-accent">{job.company}</p>
                  </div>
                  <p className="text-gray-400 mt-2 md:mt-0">{job.period}</p>
                </div>
                <p>{job.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
      
      {/* Education */}
      <section className="content-section">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-8">Education</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              className="bg-black/20 p-6 rounded-lg"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold mb-2">Bachelor of Science in Computer Science</h3>
              <p className="text-accent mb-2">University Name</p>
              <p className="text-gray-400 mb-4">2012 - 2016</p>
              <p>Studied computer science fundamentals, algorithms, and software development principles.</p>
            </motion.div>
            
            <motion.div 
              className="bg-black/20 p-6 rounded-lg"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold mb-2">Web Development & Design Certification</h3>
              <p className="text-accent mb-2">Online Platform</p>
              <p className="text-gray-400 mb-4">2017</p>
              <p>Specialized training in modern web development technologies and design principles.</p>
            </motion.div>
          </div>
        </motion.div>
      </section>
      
      <Footer />
    </div>
  );
}