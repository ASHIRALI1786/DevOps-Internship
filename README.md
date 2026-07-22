# DevOps Internship Project

## Overview

This project was completed as part of my DevOps Internship. It demonstrates containerization, CI/CD automation, Infrastructure as Code (IaC), and Kubernetes orchestration using a full-stack application.

## Project Architecture

- Frontend: React + Nginx
- Backend: FastAPI
- Containerization: Docker
- CI/CD: GitHub Actions
- Orchestration: Kubernetes (Minikube)
- Infrastructure as Code: Terraform

## Features

- Multi-stage Docker builds
- Dockerized React frontend
- Dockerized FastAPI backend
- Automated CI/CD pipeline
- Kubernetes Deployments
- Kubernetes Services
- Ingress Controller
- Persistent Volume Claim (PVC)
- Horizontal Pod Autoscaler (HPA)
- Terraform configuration

## Project Structure

```
DevOps-Internship/
│
├── backend/
├── frontend/
├── k8s/
├── terraform/
├── .github/workflows/
├── docker-compose.yml
├── README.md
└── .gitignore
```

## Technologies Used

- Docker
- Kubernetes
- Minikube
- Terraform
- GitHub Actions
- Git
- React
- FastAPI
- Nginx
- YAML

## How to Run

### Clone Repository

```bash
git clone https://github.com/ASHIRALI1786/DevOps-Internship.git
cd DevOps-Internship
```

### Build Docker Images

```bash
docker compose build
```

### Run Application

```bash
docker compose up
```

### Deploy to Kubernetes

```bash
kubectl apply -f k8s/
```

### Verify Deployment

```bash
kubectl get pods
kubectl get services
kubectl get ingress
kubectl get hpa
```

### Terraform

```bash
cd terraform

terraform init
terraform validate
terraform plan
terraform apply
```

## Screenshots

Add screenshots of:

- Docker containers
- GitHub Actions
- Kubernetes Pods
- Kubernetes Services
- Ingress
- HPA
- Terraform Apply
- Running Application

## Author

**Ashir Ali**

GitHub: https://github.com/ASHIRALI1786

LinkedIn: www.linkedin.com/in/ashir-ali-00326a287