import React from 'react';

const Experience = () => {
  const experiences = [
    {
      title: "KraftX Works",
      role: "Software Developer Intern",
      date: "Nov 2025 - Mar 2026",
      description: (
        <>
          <p>
            Architected and delivered production-ready full-stack web applications using <strong>React, TypeScript, Node.js, and Python</strong>. Central to this architecture was the integration of <strong>Supabase</strong> and <strong>Firebase</strong> to enable robust, real-time data management for enterprise clients.
          </p>
          <p>
            Engineered automated backend workflows utilizing <strong>Google Cloud APIs</strong>, significantly reducing manual operational overhead and improving overall system response times. Additionally, I integrated <strong>Razorpay</strong> payment gateways and custom webhooks, streamlining payment link generation and ensuring instant transaction status synchronization across the platform.
          </p>
          <p>
            Collaborated directly with multiple clients to gather core functional requirements, rigorously manage project scope, and ensure that complex, highly-performant web platforms were delivered strictly on schedule.
          </p>
        </>
      )
    }
  ];

  return (
    <section id="experience" className="work">
      <div className="container">
        <h2 data-aos="fade-up">Experience</h2>
        
        <div className="work-list">
          {experiences.map((exp, idx) => (
            <div className="work-item" key={idx} data-aos="fade-up">
              <div className="work-meta">
                <h3 className="work-title">{exp.title}</h3>
                <span className="work-role">{exp.role}</span>
                <span className="work-date">{exp.date}</span>
              </div>
              <div className="work-details">
                <div className="work-description">{exp.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
