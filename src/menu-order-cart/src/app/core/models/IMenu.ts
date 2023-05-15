export interface IMenu {
    category: string,
    menu: ISubMenu[]
}

export interface ISubMenu {
    id: number,
    name: string,
    price: number
}