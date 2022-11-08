const CATEGORIES_LIST = [
    {
        name: "General",
        nameP: "Geral",
        icon: "ri-global-line"
    },
    {
        name: "Technology",
        nameP: "Tecnologia",
        icon: "ri-terminal-box-line"
    },
    {
        name: "Business",
        nameP: "Negócios",
        icon: "ri-briefcase-4-line",
    },
    {
        name: "Entertainment",
        nameP: "Entretenimento",
        icon: "ri-clapperboard-fill",
    },
    {
        name: "Sports",
        nameP: "Esportes",
        icon: "ri-basketball-fill",
    },
]

const colors: { [key: string]: string } = {
    "Geral": "text-white/50",
    "Tecnologia": "text-green-400",
    "Negócios": "text-blue-400",
    "Entretenimento": "text-orange-400",
    "Esportes": "text-amber-500",
}

export {
    CATEGORIES_LIST, colors
}