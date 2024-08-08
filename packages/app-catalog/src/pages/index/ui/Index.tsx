import {Flex} from "antd";
import Categories from "../../../features/categories/ui/Categories.tsx";
import {CategoryItems} from "../model/CategoryItems.ts";
import AppCard from "../../../shared/ui/app-card/AppCard.tsx";

export const Index = () => {
    return <Flex>
        <Flex>
            <Categories items={CategoryItems}/>
        </Flex>
        <Flex vertical={true}>
            <Flex>
                <AppCard/>
                <AppCard/>
                <AppCard/>
            </Flex>
            <Flex>
                <AppCard/>
                <AppCard/>
                <AppCard/>
            </Flex>
            <Flex>
                <AppCard/>
                <AppCard/>
                <AppCard/>
            </Flex>
        </Flex>
    </Flex>
}

export default Index;