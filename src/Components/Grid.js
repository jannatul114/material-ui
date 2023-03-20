import * as React from 'react';
import { styled } from '@mui/material/styles';
import 'material-icons/iconfont/material-icons.css';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography, useTheme } from '@mui/material';

// import { useTheme } from '@mui/material/styles';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function BasicGrid() {
    const theme = useTheme();
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={7}>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                image="https://live.staticflickr.com/4010/4210875342_7cb06a9b62_c.jpg"
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Lizard
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000
                                    species, ranging across all continents except Antarctica
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                                Share
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xl={7}>
                    <Card sx={{ display: 'flex' }}>
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                            <CardContent sx={{ flex: '1 0 auto' }}>
                                <Typography component="div" variant="h5">
                                    Live From Space
                                </Typography>
                                <Typography variant="subtitle1" color="text.secondary" component="div">
                                    Mac Miller
                                </Typography>
                            </CardContent>
                            <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                                <IconButton aria-label="previous">
                                    {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
                                </IconButton>
                                <IconButton aria-label="play/pause">
                                    <PlayArrowIcon sx={{ height: 38, width: 38 }} />
                                </IconButton>
                                <IconButton aria-label="next">
                                    {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
                                </IconButton>
                            </Box>
                        </Box>
                        <CardMedia
                            component="img"
                            sx={{ width: 151 }}
                            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuJf8Rxl04E4mTYxR42piOBkf6MipU97-RdA&usqp=CAU"
                        />
                    </Card>
                </Grid>
                <Grid item xs={5}>
                    <Item>xs=4</Item>
                </Grid>
                <Grid item xs={5}>
                    <Item>xs=8</Item>
                </Grid>
                <Grid item xs={5}>
                    <Item>xs=8</Item>
                </Grid>
                <Grid item xs={5}>
                    <Item>xs=8</Item>
                </Grid>
            </Grid>
        </Box>
    );
}