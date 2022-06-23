import { writeFileSync } from 'fs';
import { generatePodTemplate } from './podTemplate';

writeFileSync(
  './pod.yaml',
  generatePodTemplate({
    podName: 'nginx',
    imageName: 'nginx',
    imageToRun: 'nginx:1.14.2',
  }),
  { encoding: 'utf-8' }
);
