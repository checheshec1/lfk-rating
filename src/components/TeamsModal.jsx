import React, {useState} from 'react';
import {Box, FormControl, InputLabel, MenuItem, Modal, Select, Typography} from "@mui/material";
import "./TeamsModal.css";

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

const TeamsModal = ({open, setOpen}) => {

    const [team, setTeam] = useState(0);
    const teams = [];
    teams.push(
        ['Анцупова Анастасия', 'Барбашин Никита', 'Верещикова Юлия', 'Жигалин Фёдор', 'Иванников Артём', 'Карпухин Александр', 'Маслова Екатерина', 'Пахомова Кристина', 'Сафонов Александр', 'Хатунцева Марина', 'Ширинкин Сергей', 'Щекланова Виктория'],
        ['Бабенко Владимир', 'Ветров Вячеслав', 'Запорожец Евгений', 'Кожемякина Виктория', 'Мартынов Никита', 'Медведева Вероника', 'Олемской Олег', 'Потапова Анастасия', 'Фефелов Сергей', 'Черникова Татьяна', 'Чурина Полина'],
        ['Гойкалова Екатерина', 'Еремеева Дарья', 'Индиков Карен', 'Кошкина Александра', 'Мошуров Андрей', 'Перушкин Никита', 'Чукова Алина', 'Попова Олеся', 'Правдин Владислав', 'Ходунов Данила', 'Шапошникова София', 'Щербатых Артур'],
        ['Богомолов Кирилл', 'Егоров Егор', 'Зайдилаев Рустам', 'Золотарёва Софья', 'Кадашева Диана', 'Кириллова Варвара', 'Нитченко Виктория', 'Рыбалка Владислав', 'Суркова Елена', 'Трухина Анастасия', 'Черников Алексей']
    );

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
                        Составы команд
                    </Typography>
                    <InputLabel id="demo-simple-select-label">Команда</InputLabel>
                    <FormControl fullWidth>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={team}
                            onChange={(event) => {setTeam(event.target.value)}}
                        >
                            <MenuItem value={0}>12 друзей Черенкова</MenuItem>
                            <MenuItem value={1}>Носорог продакшн</MenuItem>
                            <MenuItem value={2}>3-Д</MenuItem>
                            <MenuItem value={3}>12-я миля</MenuItem>
                        </Select>
                    </FormControl>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        <ol>
                            {teams[team].map(people => {
                                return(
                                    <li className={"teams"}>{people}</li>
                                )
                            })}
                        </ol>
                    </Typography>
                </Box>
            </Modal>
        </div>
    );
};

export default TeamsModal;