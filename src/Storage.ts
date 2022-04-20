export const ThemeStorage = {
    setItem: (name: string, item: any) => {
        localStorage.setItem(name, JSON.stringify(item))
    },
    getItem: (name: string) => {
        const item = localStorage.getItem(name)
        if (item) {
            return JSON.parse(item)
        }
    }
}

export const CityStorage = {
    setItem: (name: string, item: any) => {
        localStorage.setItem(name, JSON.stringify(item))
    },
    getItem: (name: string) => {
        const item = localStorage.getItem(name)
        if (item) {
            return JSON.parse(item)
        }
    }
}