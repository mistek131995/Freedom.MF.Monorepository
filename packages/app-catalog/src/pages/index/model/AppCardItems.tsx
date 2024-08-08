import {AppCardProps} from "../../../entities/AppCardProps.ts";
import LikeButton from "../../../shared/ui/LikeButton.tsx";
import DownloadButton from "../../../shared/ui/DownloadButton.tsx";

export const items : AppCardProps[] = [
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
    {
        title: "App 4",
        img: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
        action: [
            <LikeButton/>,
            <DownloadButton/>
        ],
        description: "App description"
    },
    {
        title: "App 5",
        img: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
        action: [
            <LikeButton/>,
            <DownloadButton/>
        ],
        description: "App description"
    },
]