import React from "react";

import './RecommendListItem.scss';

function RecommendListItem(prop){
    return <ul className="RecommendListItem">
        <li className="Recommenditem"> 검색어1234</li>
        <li className="Recommenditem"> 검색어2</li>
        <li className="Recommenditem"> 검색어3</li>
    </ul>;
}

export default RecommendListItem;