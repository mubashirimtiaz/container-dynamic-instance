export const generatePodTemplate = ({
  podName,
  imageName,
  imageToRun,
}: {
  podName: string;
  imageName: string;
  imageToRun: string;
}): string => `
apiVersion: v1
kind: Pod
metadata:
  name: ${podName}
spec:
  containers:
  - name: ${imageName}
    image: ${imageToRun}
    ports:
    - containerPort: 80
`;
