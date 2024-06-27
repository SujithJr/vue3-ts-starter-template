import type { App } from 'vue'
import { extractFolderFiles } from '@/configs/config-extract-components'

const globalComponents = import.meta.glob(
    '@/components/global/**/*.vue',
    { eager: true }
)

const components = extractFolderFiles(globalComponents)

export default function install(app: App) {
    for (const name in components) {
        app.component(name, components[name].default)
    }
}
