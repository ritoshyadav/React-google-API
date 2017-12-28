import React from 'react';

const VideoListItem=({video,onvideoselect})=>{
    const imageurl=video.sinppet.thumbnails.default.url;
    
    return(
    <li onclick={()=>onvideoselect(video)} classname="list-gruop-item">
    <div classname="video-list-media">
    <div classname="media-left">
    <img classname="media-object" src={imageurl}/>
    </div>
    <div classname="media-body">
    <div classname="media-heading">{video.sinppet.title}</div>
    </div>
    </div>
    </li>
    );

    
};
export default VideoListItem;