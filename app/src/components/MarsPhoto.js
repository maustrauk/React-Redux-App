import React from 'react';

const MarsPhoto = props => {
    const {photo} = props;
    return (<div className="mars-photo">
        <h3>Camera: {photo.camera.full_name}</h3>
        <img src={photo.img_src} alt={photo.earth_date} />
        <p>Date: {photo.earth_date}</p>
    </div>)
}

export default MarsPhoto;