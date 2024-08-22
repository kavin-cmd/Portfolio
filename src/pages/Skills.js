import React from 'react';
import '../css/Skills.css'; // Ensure you have this CSS file

const Skills = () => {
  return (
    <div className="skills-section">
      <h2 className="section-title">Skills</h2>
      <p className="skills-overview">
        My skill set encompasses a range of programming languages, libraries, and tools essential for data analysis and software development. Proficient in Python, R, and SQL, I leverage these languages for data manipulation and analysis. With expertise in libraries such as Pandas, Numpy, and Scikit-learn, I build and deploy machine learning models. I use visualization tools like Matplotlib and Power BI to translate complex data into actionable insights. Additionally, my experience with platforms like AWS, Apache Spark, and Prometheus enhances data processing and system monitoring capabilities. My familiarity with databases such as SQL, MongoDB, and Google Firebase ensures efficient data management.
      </p>
      
      <div className="skills-category">
        <h3 className="category-title">Programming Languages</h3>
        <div className="skills-list">
          <div className="skill-item">Python</div>
          <div className="skill-item">R</div>
          <div className="skill-item">SQL</div>
          <div className="skill-item">Java</div>
        </div>
      </div>
      
      <div className="skills-category">
        <h3 className="category-title">Libraries/Frameworks</h3>
        <div className="skills-list">
          <div className="skill-item">JavaScript</div>
          <div className="skill-item">React</div>
          <div className="skill-item">Pandas</div>
          <div className="skill-item">Numpy</div>
          <div className="skill-item">Seaborn</div>
          <div className="skill-item">Matplotlib</div>
          <div className="skill-item">Scikit-learn</div>
          <div className="skill-item">Scipy</div>
          <div className="skill-item">dplyr</div>
          <div className="skill-item">tidyr</div>
          <div className="skill-item">ggplot</div>
        </div>
      </div>
      
      <div className="skills-category">
        <h3 className="category-title">Tools / Platforms</h3>
        <div className="skills-list">
          <div className="skill-item">Git</div>
          <div className="skill-item">GitHub</div>
          <div className="skill-item">Tableau</div>
          <div className="skill-item">Power BI</div>
          <div className="skill-item">AWS</div>
          <div className="skill-item">RedShift</div>
          <div className="skill-item">Snowflake</div>
          <div className="skill-item">Apache Airflow</div>
          <div className="skill-item">Jira</div>
          <div className="skill-item">Asana</div>
          <div className="skill-item">Prometheus</div>
          <div className="skill-item">Grafana</div>
          <div className="skill-item">TensorFlow</div>
          <div className="skill-item">PyTorch</div>
          <div className="skill-item">ETL</div>
          <div className="skill-item">Google Analytics API</div>
          <div className="skill-item">Alpha Vantage API</div>
          <div className="skill-item">Databricks</div>
          <div className="skill-item">BigQuery</div>
          <div className="skill-item">Cloud Storage</div>
          <div className="skill-item">gcloud CLI</div>
          <div className="skill-item">Cloud SDK</div>
        </div>
      </div>
      
      <div className="skills-category">
        <h3 className="category-title">Databases</h3>
        <div className="skills-list">
          <div className="skill-item">SQL</div>
          <div className="skill-item">MongoDB</div>
          <div className="skill-item">Google Firebase</div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
