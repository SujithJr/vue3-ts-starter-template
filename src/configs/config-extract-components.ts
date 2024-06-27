export const extractFolderFiles = (filesTree: Record<string, any>) => {
    const file: Record<string, any> = {}

    Object.entries(filesTree).forEach(([path, definition]) => {
        const name = path.split('/').pop()?.replace(/\.\w+$/, '') as string
        file[name] = definition
    })

    return file
}
