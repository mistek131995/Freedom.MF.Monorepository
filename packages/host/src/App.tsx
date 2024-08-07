import './App.css'
import React from "react";
import {TopMenu} from "./components/top-men/TopMenu.tsx";
import { Flex, Layout } from 'antd';

const { Header, Footer, Sider, Content } = Layout;


const AppCategories = React.lazy(() => import('app_catalog/AppCategories'))

const App = () => {

    return <Flex>
        <Layout>
            <Header>
                <TopMenu/>
            </Header>
            <Layout>
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

    // return <>
    //     <TopMenu/>
    //     <div>
    //         <AppCategories/>
    //     </div>
    // </>

}

export default App
