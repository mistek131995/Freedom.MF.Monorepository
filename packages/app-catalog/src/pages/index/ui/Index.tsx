import {Flex} from "antd";
import Categories from "../../../features/categories/ui/Categories.tsx";
import {CategoryItems} from "../model/CategoryItems.ts";
import AppCardCarousel from "../../../widgets/card-carousel/ui/AppCardCarousel.tsx";
import {AppCardProps} from "../../../entities/AppCardProps.ts";
import LikeButton from "../../../shared/ui/LikeButton.tsx";
import DownloadButton from "../../../shared/ui/DownloadButton.tsx";

const items : AppCardProps[] = [
    {
        title: "App 1",
        img: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
        action: [
            <LikeButton/>,
            <DownloadButton/>
        ],
        description: "App description"
    },
    {
        title: "App 2",
        img: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
        action: [
            <LikeButton/>,
            <DownloadButton/>
        ],
        description: "App description"
    },
    {
        title: "App 3",
        img: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
        action: [
            <LikeButton/>,
            <DownloadButton/>
        ],
        description: "App description"
    },
]

export const Index = () => {
    return <Flex>
        <Flex>
            <Categories items={CategoryItems}/>
        </Flex>
        <Flex vertical={true}>
            <AppCardCarousel items={items}/>
            <AppCardCarousel items={items}/>
            <AppCardCarousel items={items}/>
        </Flex>
    </Flex>
}

export default Index;