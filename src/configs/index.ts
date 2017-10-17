import * as dotenv from 'dotenv';

function getHostPort() {
    if (process.env.HOST_PORT) {
      return parseInt(process.env.HOST_PORT, 10);
    }
    throw new Error('The server port is not defined. Please define a var HOST_PORT in the dotenv file');
  }

export function getConfigs(envFilePath: string) {
    dotenv.config({ path: envFilePath });
    return {    
      server: {
        port: getHostPort()
      }
    };
  }