import './App.css'
import React from "react";
import {TopMenu} from "./components/top-men/TopMenu.tsx";


const AppCategories = React.lazy(() => import('app_catalog/AppCategories'))

function App() {

    return <>
        <TopMenu/>
        <div>
            <AppCategories/>
        </div>
    </>

}

export default App
