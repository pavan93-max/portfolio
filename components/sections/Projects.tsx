"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, TrendingUp, Zap, Brain, Bot, Code2, Database, Cpu } from "lucide-react";

const projects = [
  {
    title: "Deep Fake Detection",
    status: "ONGOING",
    icon: TrendingUp,
    category: "Computer Vision",
    tech: ["PyTorch", "OpenCV", "MediaPipe", "CNN", "LSTM"],
    metrics: [
      { label: "Dataset", value: "1,200+ videos", progress: 100 },
      { label: "Precision", value: "95.0%", progress: 95 },
      { label: "Inference", value: "50% faster", progress: 50 },
    ],
    description: "Advanced deepfake detection system using temporal-spatial CNN architectures with optimized preprocessing pipeline. Implements frequency domain analysis and optical flow consistency checks.",
    methodology: "Multi-modal fusion (visual + temporal) with adversarial training",
    gradient: "from-purple-start to-purple-end",
  },
  {
    title: "LLM Hallucination Detection",
    icon: Brain,
    category: "NLP | Explainable AI",
    tech: ["Transformers", "SHAP", "BERT", "FastAPI", "PostgreSQL"],
    metrics: [
      { label: "Accuracy", value: "87.22%", progress: 87 },
      { label: "F1-Score", value: "0.84", progress: 84 },
      { label: "Latency", value: "<200ms", progress: 90 },
    ],
    description: "Production-grade system for detecting and mitigating hallucinations in LLM outputs. Implements SHAP-based explainability for model interpretability and confidence scoring.",
    methodology: "Ensemble approach with NLI models and semantic similarity analysis",
    gradient: "from-purple-end to-purple-start",
  },
  {
    title: "MoodWise",
    icon: Zap,
    category: "Real-time ML",
    tech: ["TensorFlow", "MediaPipe", "OpenCV", "Flask", "WebRTC"],
    metrics: [
      { label: "Accuracy", value: "85.3%", progress: 85 },
      { label: "FPS", value: "18–22", progress: 90 },
      { label: "Latency", value: "<50ms", progress: 95 },
    ],
    description: "Real-time emotion recognition system with facial landmark detection. Optimized for edge deployment with model quantization and efficient inference pipeline.",
    methodology: "Facial Action Unit (FAU) analysis with temporal smoothing",
    gradient: "from-purple-start to-purple-end",
  },
  {
    title: "Autonomous DS Agents",
    icon: Bot,
    category: "AutoML | LLM Agents",
    tech: ["LangChain", "OpenAI API", "Pandas", "Scikit-learn", "Docker"],
    metrics: [
      { label: "AutoML", value: "Enabled", progress: 100 },
      { label: "Tasks", value: "10+ types", progress: 80 },
      { label: "Success Rate", value: "78%", progress: 78 },
    ],
    description: "Intelligent agents for automated data science workflows. Implements LLM-based feature engineering, model selection, and hyperparameter optimization.",
    methodology: "ReAct pattern with tool-use capabilities and iterative refinement",
    gradient: "from-purple-end to-purple-start",
  },
  {
    title: "Neural Style Transfer",
    icon: Code2,
    category: "Deep Learning | CV",
    tech: ["PyTorch", "VGG19", "OpenCV", "Flask", "Docker"],
    metrics: [
      { label: "Models", value: "3 variants", progress: 100 },
      { label: "Speed", value: "2.5s/image", progress: 85 },
      { label: "Quality", value: "92%", progress: 92 },
    ],
    description: "Real-time neural style transfer system using perceptual loss functions. Supports multiple artistic styles with optimized inference for production deployment.",
    methodology: "Gatys et al. approach with VGG feature extraction and gradient descent",
    gradient: "from-purple-start to-purple-end",
  },
  {
    title: "Sentiment Analysis API",
    icon: Database,
    category: "NLP | API",
    tech: ["BERT", "FastAPI", "Redis", "PostgreSQL", "Docker"],
    metrics: [
      { label: "Accuracy", value: "91.5%", progress: 91 },
      { label: "Throughput", value: "500 req/s", progress: 95 },
      { label: "Uptime", value: "99.9%", progress: 99 },
    ],
    description: "High-performance sentiment analysis API with BERT fine-tuning. Includes caching layer, batch processing, and real-time monitoring.",
    methodology: "Fine-tuned BERT-base with domain adaptation and active learning",
    gradient: "from-purple-end to-purple-start",
  },
  {
    title: "Object Detection Pipeline",
    icon: Cpu,
    category: "Computer Vision",
    tech: ["YOLOv8", "TensorRT", "OpenCV", "FastAPI", "Kubernetes"],
    metrics: [
      { label: "mAP", value: "0.78", progress: 78 },
      { label: "FPS", value: "30+", progress: 95 },
      { label: "Classes", value: "80 COCO", progress: 100 },
    ],
    description: "Production-ready object detection system with YOLOv8. Optimized with TensorRT for edge deployment and real-time inference capabilities.",
    methodology: "YOLOv8 architecture with TensorRT optimization and NMS tuning",
    gradient: "from-purple-start to-purple-end",
  },
  {
    title: "Recommendation System",
    icon: TrendingUp,
    category: "ML Systems",
    tech: ["TensorFlow", "Apache Spark", "Redis", "Kafka", "PostgreSQL"],
    metrics: [
      { label: "Precision", value: "88.2%", progress: 88 },
      { label: "Recall", value: "82.5%", progress: 82 },
      { label: "Users", value: "10k+", progress: 100 },
    ],
    description: "Hybrid recommendation system combining collaborative filtering and content-based approaches. Real-time updates with streaming data processing.",
    methodology: "Matrix factorization + deep learning with real-time feature engineering",
    gradient: "from-purple-end to-purple-start",
  },
  {
    title: "Time Series Forecasting",
    icon: Zap,
    category: "ML | Forecasting",
    tech: ["LSTM", "Prophet", "XGBoost", "FastAPI", "InfluxDB"],
    metrics: [
      { label: "MAPE", value: "3.2%", progress: 97 },
      { label: "Horizon", value: "30 days", progress: 100 },
      { label: "Features", value: "50+", progress: 90 },
    ],
    description: "Multi-horizon time series forecasting system for financial and IoT data. Ensemble model combining LSTM, Prophet, and XGBoost.",
    methodology: "Ensemble of LSTM, Prophet, and gradient boosting with feature engineering",
    gradient: "from-purple-start to-purple-end",
  },
  {
    title: "Image Classification API",
    icon: Brain,
    category: "Computer Vision | API",
    tech: ["ResNet50", "FastAPI", "Redis", "Docker", "Kubernetes"],
    metrics: [
      { label: "Top-1 Acc", value: "94.8%", progress: 94 },
      { label: "Latency", value: "<100ms", progress: 95 },
      { label: "Classes", value: "1000", progress: 100 },
    ],
    description: "Scalable image classification API using ResNet50. Supports ImageNet classes with batch processing and caching for high throughput.",
    methodology: "Transfer learning with ResNet50 and data augmentation pipeline",
    gradient: "from-purple-end to-purple-start",
  },
  {
    title: "Anomaly Detection System",
    icon: Bot,
    category: "ML | Security",
    tech: ["Isolation Forest", "Autoencoder", "Kafka", "Elasticsearch", "Grafana"],
    metrics: [
      { label: "Precision", value: "93.5%", progress: 93 },
      { label: "Recall", value: "89.2%", progress: 89 },
      { label: "Events/day", value: "1M+", progress: 100 },
    ],
    description: "Real-time anomaly detection for network security and fraud detection. Combines unsupervised learning with rule-based systems.",
    methodology: "Isolation Forest + Autoencoder ensemble with streaming processing",
    gradient: "from-purple-start to-purple-end",
  },
  {
    title: "Chatbot with RAG",
    icon: Code2,
    category: "NLP | RAG",
    tech: ["LangChain", "OpenAI", "Pinecone", "FastAPI", "Streamlit"],
    metrics: [
      { label: "Accuracy", value: "92%", progress: 92 },
      { label: "Response", value: "<2s", progress: 95 },
      { label: "Context", value: "10k docs", progress: 100 },
    ],
    description: "Intelligent chatbot with RAG architecture for domain-specific knowledge. Vector search with semantic understanding and context management.",
    methodology: "RAG pipeline with embedding-based retrieval and LLM generation",
    gradient: "from-purple-end to-purple-start",
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-16 gradient-text text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={index}
                className="glass rounded-2xl p-6 hover:glass-strong transition-all group border border-white/5 hover:border-purple-start/30 relative overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                {/* Neural network pattern background */}
                <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity">
                  <svg className="w-full h-full" viewBox="0 0 200 200">
                    <defs>
                      <pattern id={`grid-${index}`} width="20" height="20" patternUnits="userSpaceOnUse">
                        <circle cx="10" cy="10" r="1" fill="currentColor" className="text-purple-start" />
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill={`url(#grid-${index})`} />
                  </svg>
                </div>

                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${project.gradient} flex items-center justify-center shadow-lg shadow-purple-start/20`}>
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="text-xl font-bold">{project.title}</h3>
                          {project.status && (
                            <span className="text-xs px-2 py-0.5 rounded-full bg-purple-start/20 text-purple-start border border-purple-start/30">
                              {project.status}
                            </span>
                          )}
                        </div>
                        <span className="text-xs text-gray-400 font-mono">{project.category}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">{project.description}</p>

                  {/* Methodology */}
                  <div className="mb-4 p-3 rounded-lg bg-black/20 border border-white/5">
                    <div className="flex items-start gap-2">
                      <Code2 className="w-4 h-4 text-purple-start mt-0.5 flex-shrink-0" />
                      <p className="text-xs text-gray-400 font-mono">{project.methodology}</p>
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs px-2.5 py-1 rounded-md bg-purple-start/10 text-purple-start border border-purple-start/20 font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Metrics with Progress Bars */}
                  <div className="space-y-3 mb-4">
                    {project.metrics.map((metric, i) => (
                      <div key={i} className="space-y-1">
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-gray-400 font-medium">{metric.label}</span>
                          <span className="text-white font-bold font-mono">{metric.value}</span>
                        </div>
                        {metric.progress && (
                          <div className="h-1.5 rounded-full bg-black/30 overflow-hidden">
                            <motion.div
                              className="h-full bg-gradient-to-r from-purple-start to-purple-end rounded-full"
                              initial={{ width: 0 }}
                              animate={isInView ? { width: `${metric.progress}%` } : { width: 0 }}
                              transition={{ duration: 1, delay: index * 0.1 + i * 0.1 }}
                            />
                          </div>
                        )}
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center gap-2 text-sm text-gray-400 group-hover:text-purple-start transition-colors pt-2 border-t border-white/5">
                    <span className="font-medium">View Case Study</span>
                    <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

