import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
export default  {
  entry: './index.js', 
  output: {
    filename: 'bundle.js', 
    path: path.resolve(__dirname, 'dist'),
  },
  target: 'node', 
};
