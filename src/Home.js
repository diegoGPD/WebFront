import React from "react";
import {Button, CardActions, Container, CssBaseline, Grid, makeStyles, Typography} from "@mui/material";
import {AppBar, Card, Toolbar} from "material";
//import { StrictMode } from "react";
//import ReactDOM from "react-dom/client";


const useStyles = makeStyles((theme) => ({
    icon: {
        marginRight: theme.spacing(2)
    },
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6)
    },
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8)
    },
    card: {
        height: "100%",
        display: "flex",
        flexDirection: "column"
    },
    cardContent: {
        flexGrow: 1
    },
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6)
    }
}));

const cards = [1, 1, 1, 1, 1, 1, 1];

export default function Home() {
    const classes = useStyles();

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
            <main>
                <div className={classes.heroContent}>
                    <Container maxWidth="sm">
                        <Typography
                            component="h1"
                            variant="h2"
                            align="center"
                            color="textPrimary"
                            gutterBottom
                        >
                            Clientes disponibles
                        </Typography>
                        <Typography
                            variant="h5"
                            align="center"
                            color="textSecondary"
                            paragraph
                        >
                            Estos son los clientes a quienes no se les ha asignado soporte
                        </Typography>

                    </Container>
                </div>
                <Container className={classes.cardGrid} maxWidth="md">
                    <Grid container spacing={4}>
                        {cards.map((card) => (
                            <Grid item key={card} xs={12} sm={6} md={4}>
                                <Card className={classes.card}>
                                    <cardContent className={classes.cardContent}>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            Cliente
                                        </Typography>
                                        <Typography>
                                            Descripcion del cliente
                                        </Typography>
                                    </cardContent>
                                    <CardActions>
                                        <Button type='submit' size="small" variant='contained' color="primary">
                                            Asistir
                                        </Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </main>
        </React.Fragment>
    );
}