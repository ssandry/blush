import React from "react";
import { useSelector } from "react-redux";
import { IBG } from "./interface";
import { IStore } from "../../redux/interface.store";
import "./index.styl";

/**
 * Component for Background of player.
 *
 * @component
 * 
 * @param {boolean} online Online / Offline status 
 * 
 * @param {string} image Image string 
*/

const BG: React.FunctionComponent<IBG> = ({ online, image }) => {
    const useImage = { backgroundImage: `url(${image})` };
    const useStandartColor = { backgroundColor: "#461027" };

    const { isTracklist } = useSelector((store: IStore) => {
        return {
            isTracklist: store.isTracklist,
        }
    })

    return <div 
        id="bg" 
        style={ online ? useImage : useStandartColor } 
        className={ isTracklist ? "bright" : "" }
    />
}

export default BG;