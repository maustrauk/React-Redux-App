import React, {useEffect} from 'react';

import MarsPhoto from './MarsPhoto';

const MarsPhotos = props => {
    useEffect(() => {
        props.load();
    }, []);

    
    return (<div className="mars-photos">
        {props.data.map(photo => {
            return (<MarsPhoto key={photo.id} photo={photo} />)
        })}
    </div>)
}

export default MarsPhotos;