resource "local_file" "deployment_info" {
  filename = "deployment.txt"

  content = <<EOF
Project: ${var.project_name}
Environment: ${var.environment}

Infrastructure as Code using Terraform
Container Orchestration: Kubernetes (Minikube)
Frontend: React + Nginx
Backend: FastAPI
EOF
}