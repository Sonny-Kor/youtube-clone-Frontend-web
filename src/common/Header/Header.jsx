import React, {useEffect, useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.scss';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import RecommendListItem from './RecommendListItem';

function Header(props) {
    const [isOpenedSearchBar, setOpenSearchBar] = useState(false);
    const toggleSearchBar = e =>{
        setOpenSearchBar(isOpened => !isOpened);
    }
    const [searchKeyword, setSearchKeyword] = useState('');

    const onChangeSearchInput = e => {
        const val = e.target.value;
        setSearchKeyword(val);
    };
    const onKeyDownSearchInput = e => {
        if (e.key === 'Enter') {
            onClickSearchButton();
        }
    }

    const navigate = useNavigate();
    
    const onClickSearchButton = e => {
        navigate(`/search?keyword=${searchKeyword}`);
        navigate({
            pathname: '/search',
            search: `keyword=${searchKeyword}`,
        });
    }

    useEffect(() => {

    }, [searchKeyword])

    return <div className="Header">
        <div className='leftSide'>
            <div className='frame1'>
                <MenuIcon className='menu'/>
            </div>
            <Link className='youTube' to="/">
                YOUTUBE
            </Link>
        </div>
        <div className='centerSide'>
            <div className="searchBar">
                <input type="text" className='inputArea' onKeyDown={onKeyDownSearchInput}
                value={searchKeyword} onChange={onChangeSearchInput} placeholder='검색' onClick={toggleSearchBar}></input>
                <div className='searchBarRecommendedList'>
                    <RecommendListItem/>
                </div>
                <button type="submit" className='submitButton' onClick={onClickSearchButton}>
                    <SearchIcon/>
                </button>
            </div>
        </div>
        <div className='rightSide'>
            <div className='loginButton'>
                <div className='accountCircle'>
                    <AccountCircleIcon/>
                </div>
                <div className='login'>
                    로그인
                </div>
            </div>
        </div>
    </div>;
}


export default Header;