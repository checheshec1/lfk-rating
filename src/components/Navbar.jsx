import React, {useContext, useState} from 'react';
import {SignUpButton} from "./SignUpButton";
import TeamsModal from "./TeamsModal";
import "./Navbar.css";
import LoginModal from "./LoginModal";
import StandingModal from "./StandingModal";
import {Context} from "../index";
import {useAuthState} from "react-firebase-hooks/auth";

const Navbar = () => {

    const {auth} = useContext(Context);
    const [user] = useAuthState(auth);
    const [clicked, setClicked] = useState(false);
    const [teamsModalActive, setTeamsModalActive] = useState(false);
    const [loginModalActive, setLoginModalActive] = useState(false);
    const [standingsModalActive, setStandingsModalActive] = useState(false);
    const [sanctions, setSanctions] = useState(false);
    let flag = true;

    const sanctionsHandler = () => {
        flag = !flag;
        setSanctions(true);
    }

    return (
        <div className={"header"}>
            <nav className={"NavbarItems"}>
                <h1 className={"navbar-logo"}>Рейтинг киностудий</h1>
                <div className={"menu-icon"} onClick={() => setClicked(!clicked)}>
                    <div className={clicked ? "fa-solid fa-xmark" : "fa-solid fa-bars"}></div>
                </div>
                <ul className={clicked ? "nav-menu active" : "nav-menu"}>
                    <li key={'teams'}>
                        <a className={'nav-links'} onClick={() => setTeamsModalActive(true)}>Составы</a>
                    </li>
                    {user ?
                        <li key={'standings'}>
                            <a className={'nav-links'} onClick={() => setStandingsModalActive(true)}>Выставить баллы</a>
                        </li>
                        :
                        <></>
                    }
                    <li>
                        <div className={"signUp-btn"}>
                            {user ?
                                <SignUpButton onClick={() => auth.signOut()}>Выйти</SignUpButton>
                                :
                                <SignUpButton onClick={() => {setLoginModalActive(true)}}>Режиссерская</SignUpButton>
                            }
                        </div>
                    </li>
                </ul>
            </nav>
            <TeamsModal open={teamsModalActive} setOpen={setTeamsModalActive}/>
            <LoginModal active={loginModalActive} setActive={setLoginModalActive}/>
            <StandingModal open={standingsModalActive} setOpen={setStandingsModalActive}/>
        </div>
    );
};

export default Navbar;