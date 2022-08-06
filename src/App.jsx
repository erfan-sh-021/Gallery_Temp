import './index.css';
import React, { useState, useEffect } from 'react';
import ImageCard from './component/imageCard';
import Navbar from './component/navbar/index'

function App() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [term, setTerm] = useState('');
  useEffect(() => {
    fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABABY_API_KEY}&q=${term}&image_type=photo`)
      .then(res => res.json())
      .then((data) => {
        setImages(data.hits);
        setLoading(false);
      }
      ).catch((err) => console.log(err));
  }, [term])
  return (
    <div className="container mx-auto">
      <Navbar searchText={(text) => setTerm(text)} />
      {!loading && images.length === 0 && (
        <h1 className="text-6xl text-center mx-auto mt-32">
          NO Images Found ...
        </h1>
      )}
      {loading ? (
        <h1 className="text-6xl text-center mx-auto mt-32">
          Loading ...
        </h1>
      ) :
        (
          <>
            <div className="grid sm:grid-cols-3 md:grid-cols-4  gap-5">
              {
                images.map(image => (
                  <ImageCard key={image.id} image={image} />
                ))}
            </div>
          </>
        )}
    </div>
  );
}

export default App;
