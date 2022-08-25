import React, {useEffect, useState} from 'react';
import {useContext} from "react";
import {Context} from "../index";
import { ref, onValue} from "firebase/database";
import "./rating.css";
import {useAuthState} from "react-firebase-hooks/auth";
import Loader from "./Loader";

const Rating = () => {

    const {database, auth} = useContext(Context);
    const [user, loading] = useAuthState(auth);
    const [rating, setRating] = useState([]);
    const [score, setScore] = useState([]);
    const [flag, setFlag] = useState(false);

    useEffect(() => {

        const days = [];
        let scores = [0, 0, 0, 0];

        for(let i = 0; i < 10; i++) {

            const ratingRef = ref(database, `days/day${i}`);
            onValue(ratingRef, (snapshot) => {
                days.push(snapshot.val());
            });

        }

        days.forEach(day => {
            scores[0] += parseInt(day.team1);
            scores[1] += parseInt(day.team2);
            scores[2] += parseInt(day.team3);
            scores[3] += parseInt(day.team4);
        })

        setRating(days);
        setScore(scores);

    }, [flag, database]);

    if(loading)
        return <Loader/>

    return (
        <div onClick={() => setFlag(true)}>
            {flag ?
                <div className={"container"}>
                    <table onClick={() => setFlag(!flag)}>
                        <thead>
                            <tr key={'header'}>
                                <td></td>
                                <td>12 друзей Черенкова</td>
                                <td>Носорог продакшн</td>
                                <td>3-Д</td>
                                <td>12-я Миля</td>
                            </tr>
                        </thead>
                        <tbody>
                            {rating.map((day, index) => {
                                return(
                                    <tr key={`day${index}`}>
                                        <td>День {index + 1}:</td>
                                        <td>{day.team1}</td>
                                        <td>{day.team2}</td>
                                        <td>{day.team3}</td>
                                        <td>{day.team4}</td>
                                    </tr>

                                )
                            })}
                            <tr>
                                <td>Итого:</td>
                                {score.map(teams => {
                                    return(
                                        <td>{teams} <a className={"fas fa-star s1"}></a></td>
                                    )
                                })}
                            </tr>
                        </tbody>
                    </table>
                </div>
                :
                <div className={"container"}>
                    <button className={"click-button"} onClick={() => setFlag(true)}>Нажми, чтобы увидеть рейтинг</button>
                </div>
            }
        </div>
    );
};

export default Rating;