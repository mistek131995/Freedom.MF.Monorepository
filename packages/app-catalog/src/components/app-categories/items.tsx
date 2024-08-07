import {MenuProps} from "antd";
import {AppstoreOutlined} from "@ant-design/icons";

type MenuItem = Required<MenuProps>['items'][number];

export const items: MenuItem[] = [
    {
        key: "sub1",
        label: "Приложения",
        icon: <AppstoreOutlined />,
        children: [
            {key: 0, label: "Категория 1"},
            {key: 1, label: "Категория 2"},
            {key: 2, label: "Категория 3"},
            {key: 3, label: "Категория 4"},
        ]
    },
    {
        key: "sub2",
        label: "Игры",
        icon: <AppstoreOutlined />
    }
]