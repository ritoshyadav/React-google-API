import React from 'react';
import VideoListItem from './video_list_item';
const videolist = (props) => {
    const videoitems=props.videos.map((video)=>{
        return(
        <VideoListItem
        key={video.etag}
        video={video}/>
    );
});
        return(
        <ul classname="col-md-4 list-group">
        {videoitems}
        </ul>
    );
};
export default videolist;