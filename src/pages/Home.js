import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Home.css'; // Make sure this CSS file reflects the styles below

const skills = [
    { name: 'Python', level: 90 },
    { name: 'SQL', level: 85 },
    { name: 'Machine Learning', level: 85 },
    { name: 'Data Visualization', level: 90 },
    { name: 'Power BI', level: 85 },
    { name: 'Apache Spark', level: 85 }
];

const projects = [
    { title: 'Customer Churn Prediction', description: 'Developed a model using Random Forests to predict customer churn and improve retention strategies.', link: 'https://github.com/kavin-cmd/customer-churn-prediction' },
    { title: 'Sales Prediction', description: 'Created a predictive model to forecast customer behavior and optimize sales strategies.', link: 'https://github.com/kavin-cmd/SalesPrediction' },
    { title: 'Air Quality Forecasting', description: 'Developed a model to predict air quality using an advanced fusion model made of CNN and DNN.', link: 'https://github.com/kavin-cmd/Air-Quality-forecasting' },
    { title: 'Cloud Hospital Readmissions', description: 'Analyzed hospital readmissions data using cloud-based tools to identify patterns and reduce readmission rates.', link: 'https://github.com/kavin-cmd/cloud-hospital-readmissions' }
];

const certifications = [
    'Software Engineer Certicate - HackerRank',
    'SQL (Intermediate) Certicate - HackerRank',
    'Introduction to Scripting in Python - Coursera',
    'Python Data Analysis - Rice University',
    'Python Data Representation - Rice University',
    'Python Data Visualization - Rice University',
    'Python Programming Essentials - Rice University',
];

const achievements = [
    'Won the Galactic Problem Solver at The International Space Apps Challenge 2019 by NASA',
    'Presented the paper on Data Preprocessing Techniques in Machine Learning ? A Review Paper at EC-ICN conference 2021',
    'Placed 4th at UGA hacks 9 2024 StateFarm Challenge',
    'Received the Excellence Award for Outstanding Performance - Yash Enterprise'
];

// const testimonials = [
//     {
//         name: 'Vaibhav Mehta',
//         title: 'Senior Business Analyst at Yash Enterprise',
//         testimonial: 'Kavin is an exceptional Data Analyst with a keen eye for detail and a strong aptitude for data-driven solutions.'
//     },
//     {
//         name: 'Mathew Stoddard',
//         title: 'Programmer Analyst at CGI',
//         testimonial: 'Working with Kavin has been a pleasure. His ability to turn data into actionable insights is remarkable.'
//     }
// ];

// const blogPosts = [
//     {
//         title: 'The Power of Data Visualization',
//         snippet: 'Data visualization is more than just creating charts; it’s about telling a story...',
//         link: '/blog/data-visualization'
//     },
//     {
//         title: 'Predictive Modeling in Business',
//         snippet: 'Predictive modeling can significantly improve business outcomes by forecasting future events...',
//         link: '/blog/predictive-modeling'
//     }
// ];

const timelineEvents = [
    { year: '2022 - 2024', title: 'Graduated with MS in Computer Science', description: 'University of Georgia. Specialized in Computer Science, machine learning, and advanced Artificial Intelligence Concepts. Graduated with a 3.4 GPA' },
    { year: 'June 2023 - August 2024', title: 'Data Analyst at CGI', description: 'Leveraged Python, Power BI, and Apache Spark for data-driven solutions. Improved processing speed by 30% and enhanced decision-making efficiency.' },
    { year: '2018 - 2022', title: 'Graduated with BE in Information Technology', description: 'University of Mumbai. Focused on foundational IT concepts, data structures, and algorithmic problem-solving.Graduated with a 8.17 GPA' },
    { year: 'September 2021 - June 2022', title: 'Data Analyst at Yash Enterprise', description: 'Spearheaded data analysis and predictive modeling tasks. Developed customer segmentation algorithms and improved market insights.' }
  ];

const Home = () => {
    return (
        <div className="home-container">
            {/* Welcome Section */}
            <header className="home-header">
                <div className="header-text">
                    <h1 className="home-title">Kavin Parikh</h1>
                    <h2 className="home-subtitle">Data Analyst</h2>
                    <p className="home-intro">
                        Welcome to my portfolio! I am a Data Analyst with a Master’s degree in Computer Science from the University of Georgia. I specialize in transforming complex datasets into actionable insights using advanced data analysis techniques and machine learning models...<Link to="/about" className="read-more-link">Read more</Link></p>
                </div>
                <img src="/public" alt="Kavin Parikh" className="header-image" />
            </header>

            {/* Skills Section */}
            <section className="skills-section">
                <h2 className="section-title">Skills</h2>
                <div className="skills-list">
                    {skills.map(skill => (
                        <div key={skill.name} className="skill-item">
                            <div className="skill-name">{skill.name}</div>
                            <div className="skill-bar-background">
                                <div className="skill-bar" style={{ width: `${skill.level}%` }}></div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Professional Timeline Section */}
            <section className="timeline-section">
                <h2 className="section-title">Professional Timeline</h2>
                <div className="timeline-ladder">
                    {timelineEvents.map((event, index) => (
                        <div key={index} className={`timeline-event ${index % 2 === 0 ? 'left' : 'right'}`}>
                            <div className="timeline-circle"></div>
                            <div className="timeline-content">
                                <h3>{event.year}</h3>
                                <p className="timeline-title">{event.title}</p>
                                <p className="timeline-description">{event.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Projects Section */}
            <section className="projects-section">
                <h2 className="section-title">Recent Projects</h2>
                <div className="projects-list">
                    {projects.map((project, index) => (
                        <div key={index} className="project-card">
                            <h3 className="project-title">{project.title}</h3>
                            <p className="project-description">{project.description}</p>
                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">View Project</a>
                        </div>
                    ))}
                </div>
            </section>

            {/* Certifications & Achievements */}
            <section className="certifications-section">
                <h2 className="section-title">Certifications & Achievements</h2>
                <ul className="certifications-list">
                    {certifications.map((cert, index) => (
                        <li key={index} className="certification-item">{cert}</li>
                    ))}
                </ul>
            </section>

            <section className="achievements-section">
                <h2 className="section-title">Achievements</h2>
                <ul className="achievements-list">
                    {achievements.map(achievement => (
                        <li key={achievement} className="achievement-item">
                            {achievement}
                        </li>
                    ))}
                </ul>
            </section>

            {/* Testimonials Section
            <section className="testimonials-section">
                <h2 className="section-title">Testimonials</h2>
                <div className="testimonials-list">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="testimonial-card">
                            <p className="testimonial-text">"{testimonial.testimonial}"</p>
                            <p className="testimonial-author">{testimonial.name}, <em>{testimonial.title}</em></p>
                        </div>
                    ))}
                </div>
            </section> */}

            {/* Blog/Insights Section
            <section className="blog-section">
                <h2 className="section-title">Latest Insights</h2>
                <div className="blog-list">
                    {blogPosts.map((post, index) => (
                        <div key={index} className="blog-post">
                            <h3 className="blog-title">{post.title}</h3>
                            <p className="blog-snippet">{post.snippet}</p>
                            <Link to={post.link} className="blog-link">Read More</Link>
                        </div>
                    ))}
                </div>
            </section> */}

            {/* Contact Section */}
            <section className="contact-section">
                <h2 className="section-title">Get in Touch</h2>
                <p>If you'd like to collaborate or learn more about my work, feel free to <a href="mailto:kavinparikh20@gmail.com" className="contact-link">email me</a>.</p>
            </section>
        </div>
    );
};

export default Home;
