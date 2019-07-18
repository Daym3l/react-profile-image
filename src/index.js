import React from 'react';
import './style.css';
import PropTypes from 'prop-types';


const GalleryPicker = props => {

    const [images, setImages] = React.useState([]);
    const { imagesRecived, returnImages } = props;

    React.useEffect(() => {
        let imageList = [];
        imagesRecived.forEach((el, i) => {
            imageList.push({ id: i, src: el.url, selected: false, title: el.name })
        });
        setImages(imageList);
    }, []);

    React.useEffect(() => {
        returnImages(images);
    }, [images])

    const onImageClick = id => {
        let imageList = [...images];
        for (const img of imageList) {
            if (img.id === id) {
                img.selected = !img.selected;
            }
        }
        setImages(imageList);
    }

    return (
        <div className="container">         
            {images.map((img, i) => <img data-tip={img.title} data-for={"images"} src={img.src} alt={img.title} key={i} className={img.selected ? "selected" : "imgPicker"} onClick={() => onImageClick(img.id)} />)}
        </div>
    )
}
GalleryPicker.propTypes = {
    imagesRecived: PropTypes.array.isRequired,
    returnImages: PropTypes.func.isRequired,
}

export default GalleryPicker;