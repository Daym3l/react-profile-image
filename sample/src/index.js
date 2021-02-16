import React from 'react';
import { render } from 'react-dom';
import ImageUpload from '../../src/index';

const App = () => {

  const [images, setImages] = React.useState([]);
  const [clear, setClear] = React.useState(false);

  const getImage = (base64Img) => {

    const imageId = Math.random();
    setImages([...images, { id: imageId, img: base64Img }]);
  }


  const removeImageHandler = (event, id) => {
    event.preventDefault();
    setImages(images.filter((img) => img.id !== id));
  };

  React.useEffect(() => {
    setClear(true);
    return () => {
      setClear(false);
    }
  }, [images]);

  return (
    <div>
      <ImageUpload
        camera
        returnImage={getImage}
        clearPreview={clear}
        styles={{ width: 200 }}
      />
      {images.map((image, idx) => (
        <div key={idx}>
          <ImageUpload
            camera
            returnImage={getImage}
            defaultImage={image.img}
            uploadBtnProps={{ disabled: true }}
            cameraBtnProps={{ disabled: true }}
            styles={{ width: 150, heigth: 150 }}
          />
        </div>
      ))}
    </div>

  );

  /*
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
    )*/
};



render(<App />, document.getElementById("root"));