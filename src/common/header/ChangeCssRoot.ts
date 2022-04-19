export const ChangeCssRoot = (theme: string) => {
    const root = document.querySelector(':root') as HTMLElement

    const components = ['bodyBackground', 'componentsBackground', 'cardBackground', 'cardShadow', 'textColor']

    components.forEach((components) => {
        root.style.setProperty(`--${components}Default`, `var(--${components}-${theme})`)
    })
}