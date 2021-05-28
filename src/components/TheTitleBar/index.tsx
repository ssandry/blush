import React from "react";
import { remote } from "electron";
import ListICO from "./ListICO";
import TheTracklist from "../TheTracklist";
import "./index.styl";

const TheTitleBar: React.FunctionComponent = () => {
    const __windowClose = () => {
        window.top.close();
    }
    const __windowMinimize = () => {
        remote.getCurrentWindow().minimize();
    }
    return <>
        <header>
            <section id="TheTitlebar">
                <div id="TheTitlebar__logo">BLUSH</div>
                <div>
                    <ListICO />
                </div>
                <div id="TheTitlebar__controls">
                    <div id="TheTitlebar__hide" onClick={__windowMinimize}>
                        <div />
                    </div>
                    <div id="TheTitlebar__close" onClick={__windowClose}>
                        <div />
                    </div>
                </div>
            </section>
        </header>
    </>
}

export default TheTitleBar;