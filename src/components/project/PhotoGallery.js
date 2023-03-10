import React from 'react'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { ClassNames } from '@emotion/react';
import { makeStyles } from '@mui/styles';
import { useMediaQuery } from '@mui/material';

function srcset(image, size, rows = 1, cols = 1) {
    return {
        src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
        srcSet: `${image}?w=${size * cols}&h=${size * rows
            }&fit=crop&auto=format&dpr=2 2x`,
    };
}


const useStyles = makeStyles((theme) => ({
    img: {
        cursor: "pointer",
        transition: "all 1s ease",
        "&:hover": {
            transform: "scale(1.2)"
        }
    }
}))


const PhotoGallery = ({ itemData, ...props }) => {
    const classes = useStyles()
    const matches = useMediaQuery('(min-width:600px)');
    return (
        <ImageList
            // sx={{ width: 500, height: 450 }}
            variant="quilted"
            cols={matches ? 8 : 4}
            rowHeight={360}
            gap={10}
        >
            {
                itemData.map((item, index) => (
                    <ImageListItem key={item.img} cols={(item.width / 1000).toFixed(0) || 1} rows={item.rows || 1} style={{ overflow: "hidden" }} onClick={() => {
                        props.handleOpenPopUp()
                        props.handleSelectImg(index)
                    }} >
                        <img
                            {...srcset(item.img, 600, item.rows, item.cols)}
                            alt={item.title}
                            className={classes.img}
                            loading="lazy"

                        />
                    </ImageListItem>
                ))
            }
        </ImageList >
    )
}

export default PhotoGallery