import React from "react";
import { motion } from "framer-motion";
import { Github, Mail, Linkedin, Briefcase, LineChart, Database, Code, Star, ExternalLink } from "lucide-react";
import { Button } from "./components/ui/button";
import { Card, CardContent } from "./components/ui/card";

export default function App() {
  return (
    <main className="bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white min-h-screen overflow-x-hidden font-sans">
      <section className="h-screen flex flex-col items-center justify-center text-center p-4">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-6xl font-bold mb-4 text-teal-400"
        >
          Hi, I'm Sonu Ahirwar
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-xl md:text-2xl max-w-2xl text-gray-300"
        >
          Data Analyst | Python Developer | SQL Specialist
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="text-md md:text-lg max-w-3xl mt-4 text-gray-400"
        >
          Transforming raw data into actionable insights through advanced analytics and visualization techniques
        </motion.p>
        <div className="flex flex-wrap justify-center gap-4 mt-6">
          <Button variant="outline">
            <a href="mailto:sonuahirwar056@gmail.com" className="flex items-center gap-2">
              <Mail className="w-4 h-4" /> Contact
            </a>
          </Button>
          <Button variant="outline">
            <a href="https://github.com/Sonuahirwar056" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <Github className="w-4 h-4" /> GitHub
            </a>
          </Button>
          <Button variant="outline">
            <a href="https://www.linkedin.com/in/sonu-ahirwar-b212b1236" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <Linkedin className="w-4 h-4" /> LinkedIn
            </a>
          </Button>
        </div>
      </section>

      <section className="p-6 max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-teal-300 mb-6 flex items-center gap-2"
        >
          <Briefcase className="w-6 h-6" /> Projects
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="bg-gray-900 border-teal-500 shadow-lg hover:scale-[1.03] transition-all">
              <CardContent className="p-4">
                <h3 className="text-xl font-semibold text-white">Spotify Listening Trend Analyzer</h3>
                <p className="text-gray-400 text-sm mt-2">
                  Analyzed top tracks of any Spotify artist using Spotipy API, with Pandas & Matplotlib visualizations.
                </p>
                <div className="flex flex-wrap mt-3 gap-2">
                  <span className="text-xs bg-gray-800 text-teal-300 px-2 py-1 rounded">Python</span>
                  <span className="text-xs bg-gray-800 text-teal-300 px-2 py-1 rounded">Pandas</span>
                  <span className="text-xs bg-gray-800 text-teal-300 px-2 py-1 rounded">Matplotlib</span>
                  <span className="text-xs bg-gray-800 text-teal-300 px-2 py-1 rounded">API</span>
                </div>
                <a
                  href="https://github.com/Sonuahirwar056/Spotify-Listening-Trend-Analyzer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center mt-4 text-teal-400 hover:underline"
                >
                  View on GitHub <ExternalLink className="ml-1 w-3 h-3" />
                </a>
              </CardContent>
            </Card>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="bg-gray-900 border-teal-500 shadow-lg hover:scale-[1.03] transition-all">
              <CardContent className="p-4">
                <h3 className="text-xl font-semibold text-white">Retail Sales Dashboard</h3>
                <p className="text-gray-400 text-sm mt-2">
                  Developed an interactive Power BI dashboard to visualize retail sales data, identifying key trends and growth opportunities.
                </p>
                <div className="flex flex-wrap mt-3 gap-2">
                  <span className="text-xs bg-gray-800 text-teal-300 px-2 py-1 rounded">Power BI</span>
                  <span className="text-xs bg-gray-800 text-teal-300 px-2 py-1 rounded">DAX</span>
                  <span className="text-xs bg-gray-800 text-teal-300 px-2 py-1 rounded">Data Modeling</span>
                </div>
                <a
                  href="https://github.com/Sonuahirwar056/Retail-Sales-Dashboard"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center mt-4 text-teal-400 hover:underline"
                >
                  View on GitHub <ExternalLink className="ml-1 w-3 h-3" />
                </a>
              </CardContent>
            </Card>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Card className="bg-gray-900 border-teal-500 shadow-lg hover:scale-[1.03] transition-all">
              <CardContent className="p-4">
                <h3 className="text-xl font-semibold text-white">Customer Segmentation Analysis</h3>
                <p className="text-gray-400 text-sm mt-2">
                  Performed RFM analysis and K-means clustering to segment customers based on purchasing behavior, enabling targeted marketing campaigns.
                </p>
                <div className="flex flex-wrap mt-3 gap-2">
                  <span className="text-xs bg-gray-800 text-teal-300 px-2 py-1 rounded">Python</span>
                  <span className="text-xs bg-gray-800 text-teal-300 px-2 py-1 rounded">Scikit-learn</span>
                  <span className="text-xs bg-gray-800 text-teal-300 px-2 py-1 rounded">SQL</span>
                  <span className="text-xs bg-gray-800 text-teal-300 px-2 py-1 rounded">Clustering</span>
                </div>
                <a
                  href="https://github.com/Sonuahirwar056/Customer-Segmentation-Analysis"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center mt-4 text-teal-400 hover:underline"
                >
                  View on GitHub <ExternalLink className="ml-1 w-3 h-3" />
                </a>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      <section className="p-6 max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-teal-300 mb-6 flex items-center gap-2"
        >
          <Star className="w-6 h-6" /> Skills
        </motion.h2>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-gray-300"
        >
          <div>
            <h3 className="text-xl font-semibold mb-3 flex items-center gap-2 text-teal-200"><Code className="w-5 h-5" /> Programming</h3>
            <ul className="list-disc ml-5 space-y-1">
              <li>Python (Advanced)</li>
              <li>R Programming</li>
              <li>SQL (MySQL, PostgreSQL)</li>
              <li>C, C++</li>
              <li>HTML/CSS</li>
              <li>JavaScript</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-3 flex items-center gap-2 text-teal-200"><LineChart className="w-5 h-5" /> Data Analysis & Visualization</h3>
            <ul className="list-disc ml-5 space-y-1">
              <li>Pandas, NumPy, Scikit-learn</li>
              <li>Matplotlib, Seaborn, Plotly</li>
              <li>Power BI, Tableau</li>
              <li>Excel (Advanced)</li>
              <li>Statistical Analysis</li>
              <li>A/B Testing</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-3 flex items-center gap-2 text-teal-200"><Database className="w-5 h-5" /> Database & Other Tools</h3>
            <ul className="list-disc ml-5 space-y-1">
              <li>Database Design & Optimization</li>
              <li>ETL Processes</li>
              <li>Jupyter Notebooks</li>
              <li>Google Colab</li>
              <li>Git & GitHub</li>
              <li>MongoDB</li>
            </ul>
          </div>
        </motion.div>
      </section>

      <section className="p-6 max-w-6xl mx-auto text-gray-300">
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-teal-300 mb-6 flex items-center gap-2"
        >
          <Briefcase className="w-6 h-6" /> Resume
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="mb-4">Download my resume to view my complete work experience, education, and additional certifications in data analytics.</p>
          <Button className="bg-teal-500 text-white hover:bg-teal-600 hover:shadow-lg transition-all">
            <a href="/Sonu_Ahirwar_Data_Analyst_Resume.pdf" download className="flex items-center gap-2">
              Download Resume <ExternalLink className="w-4 h-4" />
            </a>
          </Button>
        </motion.div>
      </section>

      <section className="p-6 max-w-6xl mx-auto text-gray-300">
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-teal-300 mb-6 flex items-center gap-2"
        >
          <Mail className="w-6 h-6" /> Contact Me
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col items-center md:items-start gap-4"
        >
          <p>Feel free to reach out for data analysis projects, collaborations, or any questions.</p>
          <div className="flex flex-col md:flex-row gap-4 mt-2">
            <a href="mailto:0173cd231056@gmail.com" className="flex items-center gap-2 text-teal-300 hover:text-teal-400 transition-colors">
              <Mail className="w-5 h-5" /> 0173cd231056@gmail.com
            </a>
            <a href="https://www.linkedin.com/in/sonu-ahirwar-304851298?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B3Rv1w95gRE2AfVLFXcWncg%3D%3D" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-teal-300 hover:text-teal-400 transition-colors">
              <Linkedin className="w-5 h-5" /> linkedin.com/in/sonu-ahirwar-304851298
            </a>
          </div>
        </motion.div>
      </section>

      <footer className="mt-16 p-6 bg-gray-900 text-center text-gray-400">
        <div className="flex justify-center gap-6 mb-4">
          <a href="https://github.com/Sonuahirwar056" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400 transition-colors">
            <Github className="w-5 h-5" />
          </a>
          <a href="https://www.linkedin.com/in/sonu-ahirwar-304851298" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400 transition-colors">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href="mailto:0173cd231056@gmail.com" className="hover:text-teal-400 transition-colors">
            <Mail className="w-5 h-5" />
          </a>
        </div>
        <p>© {new Date().getFullYear()} Sonu Ahirwar. All rights reserved.</p>
      </footer>
    </main>
  );
}