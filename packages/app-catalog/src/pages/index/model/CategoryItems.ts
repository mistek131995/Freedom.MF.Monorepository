import {MenuItem} from "../../../entities/MenuItem.ts";

export const CategoryItems : MenuItem[] = [
    {
        key: 1,
        label: "Приложения",
        children: [
            {
                key: 1.1,
                label: "Новости и чтение"
            },
            {
                key: 1.2,
                label: "Бизнес"
            },
            {
                key: 1.3,
                label: "Автомобили"
            },
            {
                key: 1.4,
                label: "Социальные"
            },
            {
                key: 1.5,
                label: "Образование"
            },
        ],
    },
    {
        key: 2,
        label: "Игры",
        children: [
            {
                key: 2.1,
                label: "Спортивные игры"
            },
            {
                key: 2.2,
                label: "Экшн"
            },
            {
                key: 2.3,
                label: "Карточные и настольные игры"
            },
            {
                key: 2.4,
                label: "Головоломки и казуальные"
            },
            {
                key: 2.5,
                label: "Ролевые"
            },
        ],
    },
]