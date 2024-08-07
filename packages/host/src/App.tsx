import './App.css'
import React from "react";
import {TopMenu} from "./components/top-men/TopMenu.tsx";
import { Flex, Layout } from 'antd';

const { Header, Footer, Sider, Content } = Layout;


const AppCategories = React.lazy(() => import('app_catalog/AppCategories'))

const App = () => {

    return <Flex>
        <Layout style={layoutStyle}>
            <Header>
                <TopMenu/>
            </Header>
            <Layout style={{minHeight: "280px"}}>
                <Sider>
                    <AppCategories/>
                </Sider>
                <Content>

                </Content>
            </Layout>
            <Footer>

            </Footer>
        </Layout>
    </Flex>
}

const layoutStyle = {
    borderRadius: 8,
    overflow: 'hidden',
    width: '100%',
};

export default App
