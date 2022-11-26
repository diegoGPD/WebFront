import React, { useState } from "react";
import {Button, CardActions, Container, CssBaseline, Grid, Typography} from "@mui/material";
import {AppBar, Card, Toolbar} from "@mui/material";
import Chat from "./chat/Chat";
//import { StrictMode } from "react";
//import ReactDOM from "react-dom/client";
const cards = [{key:1, name: "John"},{key:2, name: "Mark"},{key:3, name: "Joe"},{key:4, name: "Griffin"},{key:5, name: "Timmy"}];
let cliente = !false;

export default function Home() {
    const [mostrarChat, setMostrarChat] = useState(false);
    const [cardClinete, setCardClinete] = useState([]);
    const [buttonClick, setButtonClick] = useState(true);

    const necesitoAyuda = () =>{
        setCardClinete([{key:1, name: "John"}]) 
        setButtonClick(true);
    }
    return (
        <React.Fragment>
            <CssBaseline />
            <AppBar position="relative">
                <Toolbar>
                    <Typography variant="h6" color="inherit" noWrap>
                        Nombre de proyecto
                    </Typography>
                </Toolbar>
            </AppBar>
            <div style={{display: "flex", flexDirection: "row"}}>
                <main>
                    <div >
                        <Container maxWidth="sm">
                            <Typography
                                component="h1"
                                variant="h2"
                                align="center"
                                color="textPrimary"
                                gutterBottom
                            >
                                {cliente ? 'Mi Plataforma' : `Clientes disponibles`}
                            </Typography>
                            {!cliente && 
                                <Typography
                                    variant="h5"
                                    align="center"
                                    color="textSecondary"
                                    paragraph
                                >
                                    Estos son los clientes a quienes no se les ha asignado soporte
                                </Typography>
                            }
                        </Container>
                    </div>
                    <Container maxWidth="md">
                        {cliente && 
                        <div>
                            {buttonClick && 
                                <Button type='submit' size="small" variant='contained' color="secondary" onClick={necesitoAyuda}>
                                    Necesito ayuda
                                </Button>
                            }
                            {cardClinete.map((card) => (
                            <Grid item key={card.key} xs={12} sm={6} md={4}>
                            <Card >
                                <cardContent >
                                    <Typography gutterBottom variant="h5" component="h2">
                                        {`Recibe un asistente aqui`}
                                    </Typography>
                                    <Typography>
                                       Manda un mensaje de whatsapp a este numero +528711840155
                                    </Typography>
                                </cardContent>
                            </Card>
                        </Grid>
                            ))}
                        </div>
                        }
                        <Grid container spacing={4}>
                            {!cliente && cards.map((card) => (
                                <Grid item key={card.key} xs={12} sm={6} md={4}>
                                    <Card >
                                        <cardContent >
                                            <Typography gutterBottom variant="h5" component="h2">
                                                {`Cliente ${card.name}`}
                                            </Typography>
                                            <Typography>
                                                Descripcion del cliente
                                            </Typography>
                                        </cardContent>
                                        <CardActions>
                                            
                                            <Button type='submit' size="small" variant='contained' color="primary" onClick={() => setMostrarChat(true)}>
                                                Asistir
                                            </Button>
                                        </CardActions>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>
                    </Container>
                </main>
                {mostrarChat && <Chat/>
                }
            </div>
        </React.Fragment>
    );
}