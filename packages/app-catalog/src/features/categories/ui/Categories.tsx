import {Menu} from "antd";
import {MenuItem} from "../../../entities/MenuItem.ts";


const Categories = (props: { items: MenuItem[] }) => {
    return <Menu items={props.items}
                 style={{width: "300px"}}
                 mode="inline"
                 theme="dark"/>
}

export default Categories;