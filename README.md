# Cloud Gaming Container Deployment

This repository contains the setup to deploy a cloud gaming server using Docker on an AWS Ubuntu instance.

## Features
- Runs a cloud gaming container.
- Uses Docker for easy deployment.
- Deployable on AWS Ubuntu instance.

## Prerequisites
Before deploying, ensure you have:
- An **AWS Ubuntu instance** with Docker installed.
- A **GitHub repository** to store the container setup.
- An **SSH key** added to your GitHub and AWS instance.

## Installation & Setup
### 1. Clone the Repository
```bash
git clone https://github.com/SURYAl3152/Virtual-Cloud-Gaming.git
cd Virtual-Cloud-Gaming
```

### 2. Build & Run the Docker Container
```bash
docker build -t cloud-gaming .
docker run -d -p 8080:8080 cloud-gaming
```

### 3. Deploy on AWS Ubuntu Instance
```bash
scp -r * ubuntu@your-aws-instance-ip:/home/ubuntu/cloud-gaming
ssh ubuntu@your-aws-instance-ip
cd cloud-gaming
docker-compose up -d
```

## Automating Deployment with GitHub Actions
This repository includes a GitHub Actions workflow for automatic deployment.
- Every push to the **main** branch triggers deployment.
- The workflow connects to the AWS instance via SSH and pulls the latest changes.

## Contributing
Feel free to fork, submit issues, or contribute to the project!

## License
MIT License

