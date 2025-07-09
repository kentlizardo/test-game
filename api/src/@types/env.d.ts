declare global {
  namespace NodeJS {
    interface ProcessEnv {
      CORS_ORIGINS: string
      PORT?: string
    }
  }
}

export {}
