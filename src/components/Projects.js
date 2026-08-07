import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "AGNIYA",
      role: "GPU-Accelerated Encrypted Database",
      date: "Aug 2025 - May 2026",
      github: "https://github.com/devanshkadu2005/agniya.git",
      description: (
        <>
          <p>Architected a Paillier-2048 homomorphic encryption database achieving <strong>6.7M cached ops/sec</strong>.</p>
          <p>Engineered CUDA GPU pipelines, Numba JIT compilation, and AVX2 SIMD vectorization to deliver a massive <strong>10-50x speedup</strong> over standard operations. Designed multi-level RAM/disk caching and Path ORAM access-pattern hiding to improve hot-data query latency by up to 251x while preserving semantic security.</p>
        </>
      ),
      tech: ["Python", "CUDA", "Numba", "Next.js", "React"]
    },
    {
      title: "AWS Cedar - IAM Policy Engine",
      role: "Rust CLI & Game-Theoretic Testing Tool",
      date: "Dec 2025 - Mar 2026",
      github: "https://github.com/devanshkadu2005/cedar.git",
      description: (
        <>
          <p>Automated combination testing across 2ⁿ policy permutations using game-theoretic algorithms (Banzhaf metrics) to isolate decision-critical access controls.</p>
          <p>Built an interactive mutation engine using Rust traits for real-time policy edits. Optimized execution to process <strong>1,024 policy permutations in 0.25 seconds</strong> with a minimal 14MB memory footprint.</p>
        </>
      ),
      tech: ["Rust", "AWS Cedar", "serde_json", "clap"]
    },
    {
      title: "WidViz",
      role: "AI-Powered YouTube Video Summarizer",
      date: "Dec 2024 - Mar 2025",
      github: "https://github.com/Sub-Group-11/widviz.git",
      description: (
        <>
          <p>Architected a locally hosted desktop application that consolidates fragmented study workflows into a single offline platform, eliminating reliance on cloud tools.</p>
          <p>Developed complex video processing pipelines to auto-summarize content and generate interactive quizzes.</p>
        </>
      ),
      tech: ["Python", "Flask", "SQL", "JavaScript"]
    }
  ];

  return (
    <section id="projects" className="work">
      <div className="container">
        <h2 data-aos="fade-up">Selected Projects</h2>
        
        <div className="work-list">
          {projects.map((project, idx) => (
            <div className="work-item" key={idx} data-aos="fade-up">
              <div className="work-meta">
                <h3 className="work-title">{project.title}</h3>
                <span className="work-role">{project.role}</span>
                <span className="work-date">{project.date}</span>
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="work-github-link">
                    <i className="fab fa-github"></i> View Repository
                  </a>
                )}
              </div>
              <div className="work-details">
                <div className="work-description">{project.description}</div>
                <div className="work-tech">
                  {project.tech.map((t, i) => (
                    <span key={i}>{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
