export const PERSONAL = {
  name: "Ashish Neupane",
  title: "Machine Learning Systems Engineer",
  location: "United States",
  email: "ashish@ashishneupane.com",
  github: "https://github.com/ash-neupane",
  linkedin: "https://linkedin.com/in/ashishneupane",
  summary:
    "I have a deep understanding of LLMs, the technical skills to architect ML pipelines, and a drive to build systems that think and act. I acquired a breadth of experience building production-grade software on AWS by working in a small team with no dedicated DevOps support. Prior to Eight Sleep, I worked on LLM-As-A-Judge to run A/B experiments for Microsoft Copilot. I spent a year off between these roles climbing 14ers and diving deep into research papers in mechanistic interpretability. Now, I\u2019m interested in building from the ground up with Claude Code; what a time to be alive.",
} as const;

export interface Role {
  title: string;
  company: string;
  period: string;
  skills: string[];
  bullets: string[];
}

export const EXPERIENCE: Role[] = [
  {
    title: "Machine Learning Systems Engineer",
    company: "Eight Sleep",
    period: "January 2025 \u2013 Present",
    skills: [
      "aws-cdk",
      "ec2",
      "ecs",
      "kinesis",
      "sqs",
      "dynamo-db",
      "postgresql",
      "s3",
      "node",
      "python",
      "torch",
      "onnx",
      "ray",
      "anyscale",
      "docker",
      "datadog",
    ],
    bullets: [
      "Fully architected a model training stack to scale up data and compute \u2014 self-hosted Anyscale on AWS using aws-cdk, dockerized environments for CI, EC2, and Anyscale, and built a config-driven training paradigm using omegaconf and ray",
      "Saved ~$60K/year by reducing the memory footprint of a production Kinesis pipeline through signal processing algorithm optimizations",
      "Sped up dataset preparation and model evaluations ~100x by moving local workflows to AWS ECS",
      "Developed observability pipelines that detected and patched failures in 10% of devices in the field",
      "Built live data streamer and various data parsers to enable experiments with new sensors",
    ],
  },
  {
    title: "Machine Learning Software Engineer",
    company: "Microsoft",
    period: "August 2020 \u2013 August 2023",
    skills: [
      "azure-ml",
      "azure data factory",
      "spark",
      "xgboost",
      "lightgbm",
      "gpt-3/3.5/4",
      "python",
      ".NET",
    ],
    bullets: [
      "Developed a LLM-As-A-Judge metrics pipeline to enable shipping decisions for Microsoft 365 Copilot",
      "Enabled anomaly detection along with SHAP-based model interpretability for IT admins",
    ],
  },
  {
    title: "Graduate Research Assistant",
    company: "Pendar Technologies",
    period: "September 2019 \u2013 May 2020",
    skills: ["research", "dictionary learning", "python"],
    bullets: [
      "Conducted research on identification of chemicals using infrared imaging and Raman spectroscopy by solving a variant of the dictionary learning problem",
    ],
  },
  {
    title: "Research Engineer Intern",
    company: "Avigilon, A Motorola Solutions Company",
    period: "January \u2013 August 2019",
    skills: ["convex optimization", "camera calibration", "python", "c++"],
    bullets: [
      "Prototyped, validated, and deployed camera auto-calibration for computer vision applications by transforming a geometric problem into an optimization problem",
    ],
  },
];

export interface Education {
  degree: string;
  school: string;
  period: string;
  highlights: string[];
}

export const EDUCATION: Education[] = [
  {
    degree: "M.S. and B.S. in Electrical Engineering",
    school: "Tufts University",
    period: "September 2015 \u2013 May 2020",
    highlights: [
      "GPA 3.9, Dean\u2019s List all semesters",
      "Member of Tau Beta Pi and IEEE-HKN",
    ],
  },
];
