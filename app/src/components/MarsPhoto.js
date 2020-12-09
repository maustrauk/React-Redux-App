import React, {useEffect} from 'react';

const MarsPhoto = props => {
    useEffect(() => {
        props.load();
    }, [])
    return (<div className="mars-photo">
    </div>)
}

export default MarsPhoto;