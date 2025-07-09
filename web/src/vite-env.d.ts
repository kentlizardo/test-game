/// <reference types="vite/client" />

interface ImportMeta {
  readonly env: ImportMetaEnv
}

interface ImportMetaEnv {
  readonly VITE_API_URL: string
}

interface ViteTypeOptions {
  strictImportMetaEnv: unknown
}
