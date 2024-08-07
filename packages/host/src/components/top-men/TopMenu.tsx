import {Flex, Menu, MenuProps} from "antd";

export const TopMenu = () => {
    return <Flex justify="space-between" align="middle">
        <Menu items={items} mode="horizontal" theme="dark" style={{width:'100%'}}/>
        <Menu items={[
            {
                key: "account",
                label: "Аккаунт"
            }
        ]} mode="horizontal" theme="dark"/>
    </Flex>

}

type MenuItem = Required<MenuProps>['items'][number];
const items : MenuItem[] = [
    {
        key: "main",
        label: "Главная"
    },
]
