/// <reference types="react-scripts" />
declare namespace NodeJS {
    interface ProcessEnv {
        NODE_ENV: 'development' | 'production' | 'test'
        PUBLIC_URL: string
        REACT_APP_API_ENDPOINT: string
        REACT_APP_WS_ENDPOINT: string
        REACT_APP_WS_URI: string
        }
    }
    interface Window {
        Stripe: any
    }