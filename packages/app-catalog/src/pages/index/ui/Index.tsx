import {Flex} from "antd";
import Categories from "../../../features/categories/ui/Categories.tsx";
import {CategoryItems} from "../model/CategoryItems.ts";
import AppCardCarousel from "../../../widgets/card-carousel/ui/AppCardCarousel.tsx";
import {items} from "../model/AppCardItems.tsx";

export const Index = () => {
    return <Flex>
        <Flex>
            <Categories items={CategoryItems}/>
        </Flex>
        <Flex vertical={true} style={{width: "100%"}}>
            <AppCardCarousel items={items}/>
            <AppCardCarousel items={items}/>
            <AppCardCarousel items={items}/>
        </Flex>
    </Flex>
}

export default Index;