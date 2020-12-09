import React, {useEffect} from 'react';

const MarsPhoto = props => {
    useEffect(() => {
        props.load();
    }, []);

    const photos = props.data.photos;
    return (<div className="mars-photo">
        <p>Number of photos: {photos.length}</p>
    </div>)
}

export default MarsPhoto;