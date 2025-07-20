🟢 Cluster Info
  kubectl version                      # Show client & server versions
  kubectl cluster-info                 # Show cluster details
  kubectl get nodes                    # List all nodes
  kubectl describe node <node-name>   # Detailed info about a node

🚀 Deployments
  kubectl apply -f deployment.yaml        # Apply a deployment
  kubectl get deployments                 # List deployments
  kubectl describe deployment <name>     # Show details of a deployment
  kubectl delete -f deployment.yaml       # Delete using file
  kubectl delete deployment <name>        # Delete by name
  kubectl rollout restart deployment <name>  # Restart deployment

📦 Pods
  kubectl get pods                        # List all pods
  kubectl describe pod <pod-name>        # Detailed info about a pod
  kubectl logs <pod-name>                # View pod logs
  kubectl exec -it <pod-name> -- bash    # Open shell inside the pod
  kubectl delete pod <pod-name>          # Delete a specific pod


🌐 Services
  kubectl apply -f service.yaml          # Create service from file
  kubectl get svc                        # List services
  kubectl describe svc <name>            # Show service details
  kubectl delete -f service.yaml         # Delete using file
  kubectl delete service <name>          # Delete by name


⚙️ ConfigMaps & Secrets
  kubectl create configmap <name> --from-literal=key=value
  kubectl get configmaps
  kubectl describe configmap <name>
  
  kubectl create secret generic <name> --from-literal=password=12345
  kubectl get secrets
  kubectl describe secret <name>

📂 Namespaces
  kubectl get namespaces
  kubectl create namespace <name>
  kubectl delete namespace <name>
  kubectl config set-context --current --namespace=<name>  # Switch default namespace


📁 Apply & Delete YAML Files
  kubectl apply -f <file>.yaml           # Apply config
  kubectl delete -f <file>.yaml          # Delete config


🔄 Rolling Updates & Rollbacks
  kubectl rollout status deployment/<name>
  kubectl rollout undo deployment/<name>     # Roll back last rollout

📊 Monitoring & Debugging
  kubectl top pods                         # Requires Metrics Server
  kubectl top nodes
  kubectl describe <resource> <name>       # e.g. pod, deployment


🧪 Run & Expose Quick Apps
  kubectl run nginx --image=nginx           # Quick pod
  kubectl expose pod nginx --port=80 --type=NodePort









