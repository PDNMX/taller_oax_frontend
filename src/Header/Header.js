import React from 'react';
import {withStyles} from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Banner from "../assets/banner.jpg"
import Grid from "@material-ui/core/Grid";

const style = theme => ({
        root: {
            flexGrow: 1,
            marginBottom: theme.spacing(5)
        },
        root2: {
            flexGrow: 1
        },
        space: {
            flexGrow: 1,
        },
        toolbar: {
            maxWidth: 1200,
        },
        container1: {
            paddingTop: '75px',
            paddingBottom: '75px',
            paddingLeft: theme.spacing(1),
            paddingRight: theme.spacing(1),
            position: 'relative',
            backgroundImage: `url(${Banner})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
            backgroundSize: "cover",
        },
        item2: {
            paddingRight: theme.spacing(2),
            paddingLeft: theme.spacing(2)
        },
        whiteText: {
            color: theme.palette.white
        }
    }
);

class Header extends React.Component {
    render() {
        const {classes} = this.props;

        return (
            <div className={classes.root}>
                <Grid container alignItems={"center"} justify={"center"} className={classes.root2}>
                    <Grid item className={classes.toolbar} xs={12}>
                        <Toolbar>
                            <IconButton edge="start"
                                        onClick={this.handleMenu}
                            >
                                <MenuIcon/>
                            </IconButton>
                            <div className={classes.space}></div>
                            <Button>Iniciar sesión</Button>
                        </Toolbar>
                    </Grid>
                </Grid>
                <Grid container spacing={0} className={classes.container1} justify='center'>
                    <Grid item xs={12} md={6} className={classes.item2}>
                        <Typography variant="h4" paragraph className={classes.whiteText} style={{fontWeight: 600}}>
                            Sistema de captura
                        </Typography>
                        <Typography variant="h4" paragraph className={classes.whiteText} style={{fontWeight: 300}}>
                            Taller
                        </Typography>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default (withStyles(style)(Header));

