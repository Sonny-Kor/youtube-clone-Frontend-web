import React from "react";
import "./AsideBar.scss"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function AsideBar(){

    return <div className="AsideBar">
        <div className="asideGroup">
            <div className="asideItem">            
                <div className="asideItemIcon"></div>
                <div className="asideText">홈</div>
            </div>
            <div className="asideItem">            
                <div className="asideItemIcon"></div>
                <div className="asideText">Shorts</div>
            </div>
            <div className="asideItem">            
                <div className="asideItemIcon"></div>
                <div className="asideText">구독</div>
            </div>
        </div>
        <div className="underLine"></div>
        <div className="asideGroup">
            <div className="asideItem">            
                <div className="asideItemIcon"></div>
                <div className="asideText">보관함</div>
            </div>
            <div className="asideItem">            
                <div className="asideItemIcon"></div>
                <div className="asideText">시청 기록</div>
            </div>
        </div>
        <div className="underLine"></div>
        <div className="asideGroup">
            <div className="loginAlert">
                <div className="loginText">로그인하면 동영상에 좋아요를 표시하고 댓글을 달거나 구독할 수 있습니다.</div>
                <div className='loginButton'>
                    <div className='accountCircle'>
                        <AccountCircleIcon/>
                    </div>
                    <div className='login'>
                        로그인
                    </div>
                </div>
            </div>
        </div>
    </div>;
}

export default AsideBar;