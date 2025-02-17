import "./Gallery.css"
import React from 'react'
import gallery1 from "../../assets/gallery1.jpg"
import gallery2 from "../../assets/gallery2.jpg"
import gallery3 from "../../assets/gallery3.jpg"
import gallery4 from "../../assets/gallery4.jpg"
import gallery5 from "../../assets/gallery5.jpg"
import gallery6 from "../../assets/gallery6.jpg"
import gallery7 from "../../assets/gallery7.jpg"
import gallery8 from "../../assets/gallery8.jpg"

const Gallery = () => {
  return (
    <div className='gallery'>
        <h2>Take a look at your future environment</h2>
        <h1>GALLERY</h1>
        	<div className="gallery-container">
				<div>
				<img src={gallery1} alt="" />
				</div>
				<div>
                <img src={gallery2} alt="" />
				</div>
				<div>
                <img src={gallery3} alt="" />
				</div>
				<div>
                <img src={gallery4} alt="" />
				</div>
				<div>
                <img src={gallery5} alt="" />
				</div>
				<div>
                <img src={gallery6} alt="" />
				</div>
				<div>
                <img src={gallery7} alt="" />
				</div>
				<div>
                <img src={gallery8} alt="" />
				</div>
			</div>
    </div>
  )
}

export default Gallery
