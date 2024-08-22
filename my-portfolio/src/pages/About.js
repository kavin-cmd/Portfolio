import React from 'react';
import '../css/About.css'; // Ensure you have this CSS file for styling

const About = () => {
  return (
    <div className="about-container">
      <header className="about-header">
        <h1 className="about-title">About Me</h1>
      </header>

    <section className="about-introduction">
        <div className="introduction-content">
          <div className="introduction-text">
            <h2 className="section-subtitle">Introduction</h2>
            <p>
              Hello! I'm Kavin Parikh, a passionate Data Analyst with a Master’s degree in Computer Science from the University of Georgia and a Bachelor's in Information Technology from the University of Mumbai. My journey in the world of data has equipped me with a robust skill set and a deep understanding of how data can drive impactful business decisions.
            </p>
          </div>
          <div className="introduction-image">
            <img src="./kavin.jpeg" alt="Kavin Parikh" className="profile-image" />
          </div>
        </div>
    </section>

    <section className="about-professional-background">
        <h2 className="section-subtitle">Professional Background</h2>
        <p>
        As a Data Analyst at CGI, I have leveraged Python and Pandas for comprehensive data preprocessing, ensuring datasets are clean, normalized, and ready for in-depth analysis. My expertise in Apache Spark has enabled efficient management and processing of large-scale data, improving processing speed by 30% and ensuring high performance and scalability. I have developed interactive dashboards and detailed reports using Power BI and DAX, enhancing real-time and historical data visualization for stakeholders, which led to a 25% increase in decision-making efficiency. Additionally, I created and optimized predictive models with Scikit-learn and TensorFlow to accurately forecast equipment failures, enhancing operational efficiency. I executed complex SQL queries for efficient data extraction, transformation, and loading, and managed ETL processes to consolidate data into a unified format, reducing processing time by 40%. My role also involved implementing Prometheus for robust system monitoring and utilizing Grafana for dynamic performance visualization.
        <br></br>
        During my tenure at Yash Enterprise, I employed Python and NumPy for data manipulation and mathematical operations, which streamlined data analysis processes and enhanced predictive modeling tasks. I spearheaded the transition from client-side analysis using MS SQL to utilizing extended events, which improved data accuracy and insights. I led the implementation of extended events on SQL Server, collaborating with the tracing team to enhance data collection and analysis capabilities. Additionally, I developed a customer segmentation algorithm using R, which increased market share by 22% through targeted marketing strategies. My work with logistic regression models achieved over 98% prediction accuracy for product sales, supporting strategic business decisions and effective inventory management.
        </p>
    </section>

    <section className="about-technical-expertise">
        <h2 className="section-subtitle">Technical Expertise</h2>
        <ul>
          <li><strong>Programming Languages:</strong> Proficient in Python, R, SQL, and Java, which I use to develop models, analyze data, and automate processes.</li>
          <li><strong>Libraries/Frameworks:</strong> Skilled in using Pandas, NumPy, Scikit-learn, and TensorFlow for data manipulation, machine learning, and statistical analysis.</li>
          <li><strong>Tools/Platforms:</strong> Experienced with Git, Tableau, Power BI, AWS, and Apache Airflow for data visualization, cloud computing, and ETL processes.</li>
          <li><strong>Databases:</strong> Expertise in SQL, MongoDB, and Google Firebase for efficient data storage and retrieval.</li>
        </ul>
    </section>

    <section className="about-business-acumen">
        <h2 className="section-subtitle">Business Acumen</h2>
        <p>
          In addition to my technical skills, I possess a strong understanding of business operations and strategy. My work involves not just analyzing data but also interpreting it in the context of business goals and challenges. This ability to bridge the gap between data and business needs makes me well-suited for roles that require both technical and strategic thinking.
        </p>
    </section>

    <section className="about-achievements">
        <h2 className="section-subtitle">Achievements and Contributions</h2>
        <ul>
          <li><strong>Predictive Modeling:</strong> Developed predictive models to forecast customer behavior and optimize business strategies, leading to a measurable increase in operational efficiency.</li>
          <li><strong>Data-Driven Insights:</strong> Provided actionable insights through advanced data analysis, helping teams make informed decisions and improve performance.</li>
          <li><strong>Continuous Improvement:</strong> Consistently sought out opportunities to enhance data processes and tools, contributing to more effective data management and analysis.</li>
        </ul>
    </section>

    <section className="about-vision">
        <h2 className="section-subtitle">Vision and Goals</h2>
        <p>
          I am driven by a passion for solving complex problems and uncovering insights that drive business success. My goal is to continue leveraging data to solve challenging problems, support business growth, and drive innovation. Whether working as a Data Analyst, Business Analyst, or Data Scientist, I am committed to delivering value through data and contributing to impactful business outcomes.
        </p>
    </section>

    <section className="about-contact">
        <h2 className="section-subtitle">Let's Connect</h2>
        <p>
          If you're interested in discussing potential opportunities or collaborating on projects, feel free to <a href="mailto:kavinparikh20@gmail.com" className="contact-link">email me</a>. I look forward to connecting with like-minded professionals and exploring new challenges.
        </p>
    </section>
    </div>
  );
};

export default About;
