import './App.css'
import React from "react";
import {TopMenu} from "./components/top-men/TopMenu.tsx";
import { Flex, Layout } from 'antd';

const { Header, Footer, Content } = Layout;


const AppCatalogIndex = React.lazy(() => import('app_catalog/AppCatalogIndex'))

const App = () => {

    return <Flex>
        <Layout style={layoutStyle}>
            <Header>
                <TopMenu/>
            </Header>
            <Content>
                <AppCatalogIndex/>
            </Content>
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
