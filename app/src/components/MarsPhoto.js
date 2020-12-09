import React from 'react';

const MarsPhoto = props => {
    const {photo} = props;
    return (<div>
        <img src={photo.img_src} alt={photo.earth_date} />
    </div>)
}

export default MarsPhoto;