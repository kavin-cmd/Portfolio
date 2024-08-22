import React from 'react';
import '../css/Projects.css'; // Ensure you have this CSS file for styling

const projects = [
    { title: 'Realtime Analysis', description: 'Python project for real-time data analysis, focusing on live data processing and visualization to extract actionable insights.', link: 'https://github.com/kavin-cmd/realtime-analysis' },
    { title: 'Customer Churn Prediction', description: 'Designed and deployed a high-performing customer churn prediction model using Random Forests. Achieved significant accuracy improvements through hyperparameter tuning with GridSearchCV, delivering actionable insights to improve customer retention strategies.', link: 'https://github.com/kavin-cmd/Customer-Churn-Prediction' },
    { title: 'Sales Prediction', description: 'Developed a predictive model to forecast customer behavior in response to different pricing strategies using Python. Implemented various machine learning algorithms to optimize sales strategies and improve revenue.', link: 'https://github.com/kavin-cmd/SalesPrediction' },
    { title: 'Federated Learning on MNIST Database', description: 'Developed an improved model for determining the effect of Byzantine clients in a federated learning model based on the MNIST dataset. Introduced a novel Hyperband parameter tuning which improved the accuracy by a significant 15-20% compared to previous experiments.', link: 'https://github.com/kavin-cmd/federated-learning-on-mnist-database' },
    { title: 'Energy-Aware Coverage Control and Information Learning', description: 'Focused on energy-aware coverage control and information learning, utilizing Python to enhance efficiency in energy management and data analysis.', link: 'https://github.com/kavin-cmd/Energy-Aware-Coverage-Control-and-Information-Learning-' },
    { title: 'Privacy-Preserving on Cifar-10', description: 'Applied privacy-preserving methods to the Cifar-10 dataset using Python. Implemented techniques to secure data while maintaining model performance.', link: 'https://github.com/kavin-cmd/Privacy-preserving-on-Cifar-10' },
    { title: 'Air Quality Forecasting', description: 'Developed a Fusion model using CNN and DNN to predict and analyze the air quality index. Used LIME and SHAP analysis to evaluate feature importance and model performance.', link: 'https://github.com/kavin-cmd/Air-Quality-forecasting' },
    { title: 'Credit Card Fraud Detection', description: 'Built a machine learning model to detect fraudulent credit card transactions using advanced algorithms and data preprocessing techniques for high accuracy and precision.', link: 'https://github.com/kavin-cmd/credit-card-fraud-detection' },
    { title: 'Stock Price Prediction', description: 'Created a model to predict stock prices using historical data and machine learning algorithms like LSTM and ARIMA in Python. Applied time series analysis and regression techniques to enhance prediction accuracy.', link: 'https://github.com/kavin-cmd/stock-price-prediction' },
    { title: 'Cloud Hospital Readmissions', description: 'Analyzed hospital readmissions data using Python and AWS Cloud for data preprocessing and ETL. Compared model performances to identify patterns and reduce readmission rates.', link: 'https://github.com/kavin-cmd/cloud-hospital-readmissions' },
    { title: 'FPS VR Shooting', description: 'Developed a client-server based virtual reality shooting experience using ASP.NET. Focused on creating an immersive and responsive VR environment.', link: 'https://github.com/kavin-cmd/FPS-VR-SHOOTING' },
    { title: 'P2P Communication', description: 'Developed a peer-to-peer communication system using C++. Implemented core functionalities for reliable and efficient data exchange.', link: 'https://github.com/kavin-cmd/P2P-communication' },
    { title: 'Mushroom Classification', description: 'Conducted a data science project for mushroom classification using Jupyter Notebook. Utilized machine learning techniques to classify mushroom species based on various features.', link: 'https://github.com/yourusername/Mushroom-classification' },
    { title: 'Job Drop Analysis', description: 'Analyzed job drop data using R. Employed data preprocessing, feature engineering, and statistical modeling to provide insights and recommendations for reducing job drop rates.', link: 'https://github.com/kavin-cmd/job-drop-analysis' },
    { title: 'Plant vs Zombies Local', description: 'Implemented the Plant vs Zombies game in Java. Focused on creating a local version of the popular game with game mechanics and interactive features.', link: 'https://github.com/kavin-cmd/plantvszombieslocal' },
    { title: 'Java Quiz App', description: 'Developed a quiz application using Java. Created a user-friendly interface and backend logic to support interactive quizzes.', link: 'https://github.com/kavin-cmd/java-quiz-app' },
    { title: 'Color Detection', description: 'Built a color detection project using Python. Implemented algorithms to detect and classify colors from images or video streams.', link: 'https://github.com/kavin-cmd/color-detection' },
];

const Projects = () => {
  return (
    <div className="projects-container">
      <h1 className="projects-title">Projects</h1>
      <div className="projects-list">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h2 className="project-title">{project.title}</h2>
            <p className="project-description">{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">View Project</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
