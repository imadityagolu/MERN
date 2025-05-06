import { useState } from 'react';
import i1 from './Img/1.webp'
import i2 from './Img/2.webp'
import i3 from './Img/3.webp'
import i4 from './Img/4.webp'

function Home(){

    const [selectedImage, setSelectedImage] = useState(null);
    const handleClick=(img) =>{
        setSelectedImage(img);
    };
    return (
        <>
        <h1 className="text-3xl font-semibold text-center w-full h-15 bg-gray-100 place-content-center shadow-lg">Image Gallery</h1>

        <p className="text-center relative top-3 underline underline-offset-1">Click on an image!</p>

        <div className="flex relative top-8 gap-3 w-full place-content-center">
            <img className="w-45 h-40 border-1 rounded-xl shadow-lg transition-transform duration-300 hover:scale-110 hover:shadow-lg" src={i1} alt="" onClick={() => handleClick(i1)} />
            <img className="w-45 h-40 border-1 rounded-xl shadow-lg transition-transform duration-300 hover:scale-110 hover:shadow-lg" src={i2} alt="" onClick={() => handleClick(i2)} />
            <img className="w-45 h-40 border-1 rounded-xl shadow-lg transition-transform duration-300 hover:scale-110 hover:shadow-lg" src={i3} alt="" onClick={() => handleClick(i3)} />
            <img className="w-45 h-40 border-1 rounded-xl shadow-lg transition-transform duration-300 hover:scale-110 hover:shadow-lg" src={i4} alt="" onClick={() => handleClick(i4)} />
        </div>


        {selectedImage && (
            <div>
                <p className="text-xl font-bold text-center top-15 relative">Selected Image shown below</p>
                <div className="flex relative top-20 w-full place-content-center">
                <img className="w-110 h-80 border-1 rounded-xl shadow-lg" src={selectedImage} alt="" />
                </div>
            </div>
        )}
        </>
    );
}

export default Home;