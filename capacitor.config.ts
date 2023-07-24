import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'monsters-rolodex',
  webDir: 'build',
  server: {
    androidScheme: 'https'
  }
};

export default config;
