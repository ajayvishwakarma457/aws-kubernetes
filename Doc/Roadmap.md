1. Get Comfortable with Containers
   Learn Docker basics: images, containers, volumes, networks
   Practice building and running containerized apps locally

2. Install a Local Cluster
   Try Minikube or Kind to spin up a single-node Kubernetes on your machine
   Explore kubectl commands: get, describe, apply, logs, exec

3. Understand Kubernetes Architecture
   Control plane: API Server, etcd, Scheduler, Controller Manager
   Nodes: kubelet, kube-proxy
   Key concepts: Pods, Deployments, Services

4. Deploy Your First App
   Write a YAML Deployment + Service for a simple web app
   Use kubectl apply -f to deploy, then scale and update it
   Observe rolling updates and rollbacks

5. Work with Config & Storage
   Externalize settings via ConfigMaps & Secrets
   Attach PersistentVolumes and PersistentVolumeClaims to stateful apps

6. Networking & Ingress
   Expose Services as ClusterIP, NodePort, LoadBalancer
   Deploy an Ingress Controller (e.g., NGINX) and route multiple hosts/paths

7. Autoscaling & Self-Healing
   Configure Liveness and Readiness Probes
   Enable Horizontal Pod Autoscaler (HPA) based on CPU/memory

8. CI/CD & Helm
   Package apps into Helm charts for reusable deployments
   Integrate with a pipeline (GitHub Actions, Jenkins) to auto-deploy on commit

9. Advanced Extensions
   Write a simple CustomResourceDefinition (CRD) and Controller/Operator
   Explore Service Mesh (Istio or Linkerd) for mTLS and traffic control

10. Security & Best Practices
    Enforce RBAC and Pod Security Standards
    Apply NetworkPolicies to restrict traffic
    Regularly scan images and audit cluster logs

11. Real-World Practice & Certification
    Use Katacoda or Play with Kubernetes for hands-on labs
    Prepare for CNCF CKA/CKAD by practicing timed exercises
