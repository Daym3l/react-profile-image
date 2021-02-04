import React from 'react';
import { render } from 'react-dom';
import ImageUpload from '../../src/index';

const App = () => {

  const [images, setImages] = React.useState([]);

  const getImage = imagen => {
    setImages([...images, imagen]);
  }

  return (
    <div>
      <ImageUpload
        camera
        returnImage={getImage}
        uploadBtnProps={{
          variant: "contained",
          //color: "#fff",
          //label: 'Subir',
          onClick: () => {
            console.log('This Function well never run');
          },
          disabled: true
        }}
        imageType="base64"
        maxImgSize={512000}
        sizeErrorMsg="Tamaño máximo (500KB)"
        isNotImgErrorMsg="Imágenes solamente!"
      />
      <ImageUpload
        camera
        returnImage={getImage}
        uploadBtnProps={{
          variant: "contained",
          //color: "#fff",
          //label: 'Subir',
          onClick: () => {
            console.log('This Function well never run');
          }
        }}
        imageType="base64"
        maxImgSize={512000}
        sizeErrorMsg="Tamaño máximo (500KB)"
        isNotImgErrorMsg="Imágenes solamente!"
      />
      <div>
        {images.map((img, idx) => {
          return <img src={img} alt="Imagen" key={idx} width="200px" height="200px" />
        })}
      </div>
    </div>
  )
};


render(<App />, document.getElementById("root"));