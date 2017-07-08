import { ENV } from './../../core/env.config';

interface AuthConfig {
  CLIENT_ID: string,
  CLIENT_DOMAIN: string,
  AUDIENCE: string,
  REDIRECT: string,
  SCOPE: string
};

export const AUTH_CONFIG: AuthConfig = {
  CLIENT_ID: '23o1odOYUUmOi8q33llNKEgHqfux2wLy',
  CLIENT_DOMAIN: 'devjohnmhoward.auth0.com',
  AUDIENCE: 'http://localhost:8083/api/',
  REDIRECT: `${ENV.BASE_URI}/callback`,
  SCOPE: 'openid profile'
};
