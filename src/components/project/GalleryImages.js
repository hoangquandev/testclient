import React, { useState, useCallback } from "react";
// import { render } from "react-dom";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import { makeStyles } from "@mui/styles";
// import { photos } from "./photos";

const useStyles = makeStyles((theme) => ({
    image: {
        // margin: 2,
        // height: "360px",
        transition: "transform 1s ease",
        cursor: "pointer",
        "&:hover": {
            transform: "scale(1.1)"
        }
    },
    containerImage: {
        // height: "360px",
        overflow: "hidden",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: 2,
        // borderRadius: "8px"
    }
}))
const GalleryImages = ({ margin, photos }) => {
    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);

    const openLightbox = useCallback((event, { photo, index }) => {
        setCurrentImage(index);
        setViewerIsOpen(true);
    }, []);

    const closeLightbox = () => {
        setCurrentImage(0);
        setViewerIsOpen(false);
    };

    const classes = useStyles()
    const renderImage = useCallback(
        ({ index, left, top, key, photo }) => (
            <div key={key} className={classes.containerImage}>
                <img

                    alt=""
                    {...photo}
                    className={classes.image}
                    onClick={() => {
                        setCurrentImage(index)
                        setViewerIsOpen(true)
                    }}
                />
            </div>
        ),
        []
    );
    return (
        <div style={{ marginBottom: margin }}>
            <Gallery photos={photos} renderImage={renderImage} />
            <ModalGateway>
                {viewerIsOpen ? (
                    <Modal onClose={closeLightbox} >
                        <Carousel
                            currentIndex={currentImage}

                            views={photos.map(x => ({
                                ...x,
                                srcset: x.srcSet,
                                caption: x.title,
                                background: "white"
                            }))}
                        />
                    </Modal>
                ) : null}
            </ModalGateway>
        </div>
    )
}

export default GalleryImages