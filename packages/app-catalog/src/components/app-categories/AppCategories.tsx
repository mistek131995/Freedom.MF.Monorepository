import {items} from "./items.tsx";
import {Menu} from "antd";


const AppCategories = () => {
    return <Menu
            style={{ width: 256 }}
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            mode="inline"
            theme="dark"
            items={items}/>
}

export default AppCategories