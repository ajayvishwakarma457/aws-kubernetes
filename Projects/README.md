# 🐳 Node.js App with Docker & Kubernetes on AWS

This repository demonstrates deploying a **Node.js application** using **Docker** and **Kubernetes** on **AWS infrastructure**. It includes a working app containerized via Docker and orchestrated through Kubernetes using deployment and service YAMLs.

---

## 🔗 Repository

**GitHub:** [aws-kubernetes](https://github.com/ajayvishwakarma457/aws-kubernetes)

---

## 📦 Features

- 🚀 Lightweight Express-based Node.js app
- 🐳 Docker containerization with production-ready Dockerfile
- ☸️ Kubernetes deployment and service configuration
- ☁️ AWS-compatible setup (EKS or EC2 with kubeadm)
- 📄 Notes for dev setup and infrastructure provisioning

---

## 🧱 Folder Structure

aws-kubernetes/
├── app.js # Node.js application entrypoint
├── package.json # App dependencies
├── Dockerfile # Image definition for Docker
├── kubernetes/
│ ├── deployment.yaml # Deployment config (replicas, pod spec)
│ └── service.yaml # Service config (exposure via NodePort/LoadBalancer)
├── notes/
│ └── note.txt # Project-related notes or instructions
├── .gitignore
├── README.md



---

## ⚙️ Technologies Used

- Node.js + Express
- Docker
- Kubernetes (YAML-based config)
- AWS (EKS / EC2 / kubectl / kubeadm)

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/ajayvishwakarma457/aws-kubernetes.git
cd aws-kubernetes


Build Docker Image
  docker build -t my-node-app .

Run locally (optional):
  docker run -p 3000:3000 my-node-app

Deploy to Kubernetes
  Ensure your kubectl is configured to communicate with your AWS/EKS cluster.

Create Deployment & Service
  kubectl apply -f kubernetes/deployment.yaml
  kubectl apply -f kubernetes/service.yaml

Verify
  kubectl get pods
  kubectl get services

Access the App
  If NodePort: use EC2 public IP + exposed port
  If LoadBalancer: use external LB endpoint (from kubectl get svc)

## 📬 Contact
  **Author:** Ajay M Vishwakarma  
  **Email:** ajayvishwakarma457@gmail.com

📄 License
  This repository is licensed under the MIT License.
  See the LICENSE file for details.



