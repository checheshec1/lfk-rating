import React, {useContext, useState} from 'react';
import {Box, FormControl, InputLabel, MenuItem, Modal, Select, TextField, Typography} from "@mui/material";
import {Context} from "../index";
import {ref, update} from "firebase/database";
import "./StandingModal.css";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const StandingModal = ({open, setOpen}) => {

    const {database} = useContext(Context);
    const [day, setDay] = useState('');
    const [scoreAndrey, setScoreAndrey] = useState(0);
    const [scoreAnya, setScoreAnya] = useState(0);
    const [scoreDima, setScoreDima] = useState(0);
    const [scoreMilena, setScoreMilena] = useState(0);


    const sendData = () => {
        const updates = {};

        const postData = {
            team1: scoreAndrey,
            team2: scoreAnya,
            team3: scoreDima,
            team4: scoreMilena
        }

        updates[`days/${day}`] = postData;
        update(ref(database), updates);

        setOpen(false);
    }

    return (
        <div>
            <Modal
                open={open}
                onClose={() => setOpen(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Выставление баллов
                    </Typography>
                    <InputLabel id="demo-simple-select-label">День</InputLabel>
                    <FormControl fullWidth>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={day}
                            onChange={(event) => {setDay(event.target.value)}}
                        >
                            <MenuItem value={"day0"}>День 1</MenuItem>
                            <MenuItem value={"day1"}>День 2</MenuItem>
                            <MenuItem value={"day2"}>День 3</MenuItem>
                            <MenuItem value={"day3"}>День 4</MenuItem>
                            <MenuItem value={"day4"}>День 5</MenuItem>
                            <MenuItem value={"day5"}>День 6</MenuItem>
                            <MenuItem value={"day6"}>День 7</MenuItem>
                            <MenuItem value={"day7"}>День 8</MenuItem>
                            <MenuItem value={"day8"}>День 9</MenuItem>
                            <MenuItem value={"day9"}>День 10</MenuItem>
                        </Select>
                    </FormControl>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>Список команд</Typography>
                    <InputLabel id="demo-simple-select-label">Команда Андрея</InputLabel>
                    <TextField
                        id="outlined-number"
                        type="number"
                        onChange={(event) => setScoreAndrey(event.target.value)}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <InputLabel id="demo-simple-select-label">Команда Ани</InputLabel>
                    <TextField
                        id="outlined-number"
                        type="number"
                        onChange={(event) => setScoreAnya(event.target.value)}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <InputLabel id="demo-simple-select-label">Команда Димы</InputLabel>
                    <TextField
                        id="outlined-number"
                        type="number"
                        onChange={(event) => setScoreDima(event.target.value)}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <InputLabel id="demo-simple-select-label">Команда Милены</InputLabel>
                    <TextField
                        id="outlined-number"
                        type="number"
                        onChange={(event) => setScoreMilena(event.target.value)}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <div className={"score-container"}>
                        <button type={"submit"} className={"score-button"} onClick={sendData}><a>Выставить</a></button>
                    </div>
                </Box>
            </Modal>
        </div>
    );
};

export default StandingModal;