import React from 'react';
import { createRoot } from 'react-dom/client';
import ProfileImage from '../../src/index.jsx';

const App = () => {
  const [images, setImages] = React.useState([]);
  const [clear, setClear] = React.useState(false);

  const getImage = (base64Img) => {
    setImages((prev) => [...prev, { id: Math.random(), img: base64Img }]);
  };

  const removeImage = (id) => {
    setImages((prev) => prev.filter((img) => img.id !== id));
  };

  React.useEffect(() => {
    setClear(true);
    return () => setClear(false);
  }, [images]);

  return (
    <div style={{ padding: 24 }}>
      <ProfileImage
        camera
        returnImage={getImage}
        clearPreview={clear}
        styles={{ width: 200, height: 200, backgroundColor: '#eee', borderRadius: 8 }}
      />
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginTop: 16 }}>
        {images.map((image) => (
          <div key={image.id} style={{ position: 'relative' }}>
            <ProfileImage
              returnImage={() => {}}
              defaultImage={image.img}
              uploadBtnProps={{ disabled: true }}
              styles={{ width: 150, height: 150, backgroundColor: '#eee', borderRadius: 8 }}
            />
            <button onClick={() => removeImage(image.id)} style={{ marginTop: 4, display: 'block' }}>
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

createRoot(document.getElementById('root')).render(<App />);
