import {AppCardProps} from "../../../entities/AppCardProps.ts";
import {Button, Flex} from "antd";
import AppCard from "../../../features/app-card/AppCard.tsx";
import {LeftOutlined, RightOutlined} from "@ant-design/icons";
import "./style.css"

const AppCardCarousel = (props: {items: AppCardProps[]}) => {

    return <Flex className="app-card-carousel-container" justify="space-between">
        <div>
            <Button className="arrow">
                <LeftOutlined/>
            </Button>
        </div>
        {
            props.items.slice(0, 4).map(item => {
                return <AppCard card={item}/>
            })
        }
        <div>
            <Button className="arrow">
                <RightOutlined/>
            </Button>
        </div>
    </Flex>
}

export default AppCardCarousel;