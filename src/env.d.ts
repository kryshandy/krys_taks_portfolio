/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />
/// <reference types="astro/types" />

interface ImportMetaEnv {
  readonly PUBLIC_SITE_URL: string;
  readonly PUBLIC_SITE_NAME: string;
  readonly PUBLIC_CONTACT_ENDPOINT: string;
  readonly PUBLIC_GA_ID?: string;
  readonly PUBLIC_PLAUSIBLE_DOMAIN?: string;
  readonly PUBLIC_GITHUB_URL: string;
  readonly PUBLIC_LINKEDIN_URL: string;
  readonly PUBLIC_TWITTER_URL: string;
  readonly PUBLIC_EMAIL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}