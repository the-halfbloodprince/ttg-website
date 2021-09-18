import React, { useEffect, useState } from 'react';
import './css/Mygallery.css';
import images from './data';
import { SRLWrapper } from 'simple-react-lightbox';
import SimpleReactLightbox from 'simple-react-lightbox';



function Mygallery() {
	const [tag, setTag] = useState('all');
	const [filteredImages, setFilteredImages] = useState([]);

	useEffect(
		() => {
			tag === 'all' ? setFilteredImages(images) : setFilteredImages(images.filter(image => image.tag === tag));
		},
		[tag]
	);
    
			
		
	return (
        <SimpleReactLightbox>
		<div className="App">
			<div className="tags">
				<TagButton name="all" tagActive={tag === 'all' ? true : false} handleSetTag={setTag} /> /
				<TagButton name="TEDX" tagActive={tag === 'TEDX' ? true : false} handleSetTag={setTag} /> /
				<TagButton name="IPR" tagActive={tag === 'IPR' ? true : false} handleSetTag={setTag} /> /
				<TagButton name="MEET" tagActive={tag === 'MEET' ? true : false} handleSetTag={setTag} />
			</div>
			<SRLWrapper  >
				<div className="container">
					{filteredImages.map(image => (
						<div key={image.id} className="image-card">
							<a className ="aimage"href={`/images/${image.imageName}`}>
								<img className="image" src={`/images/${image.imageName}`} alt="" />
							</a>
						</div>
					))}
				</div>
			</SRLWrapper>
		</div>
        </SimpleReactLightbox>

	);
}

const TagButton = ({ name, handleSetTag, tagActive }) => {
	return (
		<button className={`tag ${tagActive ? 'gactive' : null}`} onClick={() => handleSetTag(name)}>
			{name.toUpperCase()}
		</button>
	);
};

export default Mygallery;