
import { UseCaseType } from "@/components/UseCaseCard";

export const useCases: UseCaseType[] = [
  {
    id: "1",
    title: "Customer Support AI Assistant",
    description: "Implement an AI-powered chatbot that handles common customer inquiries, reducing response time and freeing up human agents for complex issues.",
    function: "Customer Service",
    industry: "Retail",
    steps: [
      { name: "Analyze support tickets", description: "Identify common questions and patterns" },
      { name: "Train AI model", description: "Use historical data to train the assistant" },
      { name: "Deploy chatbot", description: "Integrate with existing channels" },
      { name: "Monitor & improve", description: "Continuously refine based on interactions" }
    ],
    resources: {
      hasDownload: true,
      hasVideo: true,
      hasFramework: true
    },
    bgColor: "bg-brand-peach/30"
  },
  {
    id: "2",
    title: "Inventory Optimization with AI",
    description: "Predict optimal inventory levels using machine learning models that analyze historical sales data, seasonal trends, and external factors.",
    function: "Process Optimization",
    industry: "Retail",
    steps: [
      { name: "Data collection", description: "Gather historical inventory and sales data" },
      { name: "Build prediction model", description: "Create ML model for demand forecasting" },
      { name: "Integrate with ERP", description: "Connect to existing inventory systems" },
      { name: "Set automated rules", description: "Establish reordering thresholds" }
    ],
    resources: {
      hasDownload: true,
      hasVideo: false,
      hasFramework: true
    },
    bgColor: "bg-brand-mint/30"
  },
  {
    id: "3",
    title: "AI-Powered Financial Reporting",
    description: "Automate financial report generation and analysis using AI to extract insights, identify anomalies, and provide recommendations.",
    function: "Analytics & Insights",
    industry: "Finance",
    steps: [
      { name: "Connect data sources", description: "Integrate with financial systems" },
      { name: "Configure report templates", description: "Set up customized report formats" },
      { name: "Train anomaly detection", description: "Teach AI to identify unusual patterns" },
      { name: "Schedule automation", description: "Set up recurring report generation" }
    ],
    resources: {
      hasDownload: true,
      hasVideo: true,
      hasFramework: false
    },
    bgColor: "bg-brand-lightblue/30"
  },
  {
    id: "4",
    title: "HR Document Processing Automation",
    description: "Implement AI-powered document processing to extract information from resumes, applications, and employee documents, reducing manual data entry.",
    function: "Automation",
    industry: "Finance",
    steps: [
      { name: "Define document types", description: "Categorize different HR documents" },
      { name: "Train OCR model", description: "Teach AI to extract relevant information" },
      { name: "Set up workflows", description: "Create automated processing paths" },
      { name: "Integrate with HRIS", description: "Connect to HR management systems" }
    ],
    resources: {
      hasDownload: false,
      hasVideo: true,
      hasFramework: true
    },
    bgColor: "bg-brand-lavender/30"
  },
  {
    id: "5",
    title: "AI Patient Triage System",
    description: "Deploy an AI solution that helps prioritize patient care based on symptoms, medical history, and available resources, improving efficiency and outcomes.",
    function: "Process Optimization",
    industry: "Healthcare",
    steps: [
      { name: "Data integration", description: "Connect to electronic health records" },
      { name: "Algorithm development", description: "Create triage decision model" },
      { name: "Clinical validation", description: "Test and validate with medical staff" },
      { name: "Rollout & training", description: "Deploy and train staff on usage" }
    ],
    resources: {
      hasDownload: true,
      hasVideo: true,
      hasFramework: true
    },
    bgColor: "bg-brand-peach/30"
  },
  {
    id: "6",
    title: "AI-Enhanced Content Creation",
    description: "Implement AI tools to help generate, optimize, and personalize marketing content across channels, improving engagement and conversion rates.",
    function: "Content Creation",
    industry: "Education",
    steps: [
      { name: "Content audit", description: "Analyze existing content performance" },
      { name: "AI tool selection", description: "Choose appropriate AI content tools" },
      { name: "Workflow integration", description: "Incorporate into content creation process" },
      { name: "Performance tracking", description: "Measure impact on engagement metrics" }
    ],
    resources: {
      hasDownload: false,
      hasVideo: true,
      hasFramework: false
    },
    bgColor: "bg-brand-mint/30"
  },
  {
    id: "7",
    title: "Predictive Equipment Maintenance",
    description: "Implement an AI system that predicts when manufacturing equipment needs maintenance, reducing downtime and extending machine life.",
    function: "Process Optimization",
    industry: "Manufacturing",
    steps: [
      { name: "Sensor deployment", description: "Install IoT sensors on equipment" },
      { name: "Data collection", description: "Gather operating data over time" },
      { name: "Model training", description: "Develop predictive maintenance algorithms" },
      { name: "Alert system setup", description: "Create notification workflows" }
    ],
    resources: {
      hasDownload: true,
      hasVideo: false,
      hasFramework: true
    },
    bgColor: "bg-brand-lightblue/30"
  },
  {
    id: "8",
    title: "AI Property Valuation Tool",
    description: "Create an AI system that accurately estimates property values based on comparable sales, location data, property features, and market trends.",
    function: "Analytics & Insights",
    industry: "Real Estate",
    steps: [
      { name: "Data collection", description: "Gather property and market data" },
      { name: "Feature engineering", description: "Identify relevant property attributes" },
      { name: "Model development", description: "Create valuation algorithms" },
      { name: "Validation & deployment", description: "Test accuracy and launch tool" }
    ],
    resources: {
      hasDownload: true,
      hasVideo: true,
      hasFramework: false
    },
    bgColor: "bg-brand-lavender/30"
  },
  {
    id: "9",
    title: "Personalized Learning AI Platform",
    description: "Implement an AI-powered learning system that adapts content and pace to individual student needs, improving engagement and outcomes.",
    function: "Content Creation",
    industry: "Education",
    steps: [
      { name: "Learning path design", description: "Create adaptable curriculum structures" },
      { name: "Content tagging", description: "Categorize materials for recommendation" },
      { name: "Algorithm development", description: "Build personalization engine" },
      { name: "Progress tracking", description: "Set up analytics dashboard" }
    ],
    resources: {
      hasDownload: true,
      hasVideo: true,
      hasFramework: true
    },
    bgColor: "bg-brand-peach/30"
  }
];
