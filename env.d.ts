/// <reference types="vite/client" />

import type GlobalLink from '@/components/global/GlobalLink.vue'

declare module 'vue' {
    interface GlobalComponents {
        GlobalLink: typeof GlobalLink
    }
}
