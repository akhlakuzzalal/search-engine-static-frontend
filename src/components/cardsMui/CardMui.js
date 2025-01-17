import React, { useState } from "react";
import { styled } from "@mui/material/styles";

import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import TrackChangesIcon from "@mui/icons-material/TrackChanges";

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
        duration: theme.transitions.duration.shortest,
    }),
}));

const CardMui = ({ data }) => {
    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardHeader sx={{ color: "info.main" }} title={data.title} />
            {/* <CardMedia
                component="img"
                height="194"
                image={data.img}
                alt={data.title}
                sx={{ padding: "1em 1em 0 1em", objectFit: "contain" }}
            /> */}
            <CardContent>
                <Typography variant="body2" color="text.secondary" dangerouslySetInnerHTML={{ __html: data.description }}></Typography>
            </CardContent>
            <CardActions disableSpacing>
                <ExpandMore expand={expanded} onClick={handleExpandClick} aria-expanded={expanded} aria-label="show more">
                    <ExpandMoreIcon />
                </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography sx={{ color: "success.main", fontWeight: "bold" }} paragraph>
                        {data.collapse_title}
                    </Typography>
                    <Typography
                        align="justify"
                        dangerouslySetInnerHTML={{
                            __html: data.collapse_description,
                        }}
                        paragraph
                    ></Typography>
                </CardContent>
            </Collapse>
        </Card>
    );
};

export default CardMui;
