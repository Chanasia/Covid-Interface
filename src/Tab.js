import './Tab.css'
import WorldWideCovidBoard from "./WorldWideCovid";
import CountryCovid from './CountryCovid';
import { useState } from 'react';


function Tab(){
    const [toggleTab, setToggleTab] = useState(1);

    const toggleTabs = (n) => {
        setToggleTab(n)
    }

    return(
        <div className="Tab">
            <div className="block-tabs">
                <div className={toggleTab === 1 ? "tabs active" : "tabs"} onClick={() => {toggleTabs(1)}}>ผู้คนทั่วโลก</div>
                <div className={toggleTab === 2 ? "tabs active" : "tabs"} onClick={() => {toggleTabs(2)}}>ผู้คนในประเทศ</div>
            </div>
            <div className="content-tabs">
                <div className={toggleTab === 1 ? "content active" : "content"}>
                    <WorldWideCovidBoard />
                </div>
                <div className={toggleTab === 2 ? "content active" : "content"}>
                    <CountryCovid />
                </div>
            </div>
            
        </div>
    )
}

export default Tab;