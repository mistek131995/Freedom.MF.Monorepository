import {AppCardProps} from "../../../entities/AppCardProps.ts";
import {Flex} from "antd";
import AppCard from "../../../features/app-card/AppCard.tsx";

const AppCardCarousel = (props: {items: AppCardProps[]}) => {
    return <Flex>
        {
            props.items.map(item => {
                return <AppCard card={item}/>
            })
        }
    </Flex>
}

export default AppCardCarousel;