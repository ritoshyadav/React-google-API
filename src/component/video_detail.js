import React from 'react';
if(!video){
return<div> looding ... </div>
}
const Videodetials=({video})=>{
    const Videoid=Video.id.Videoid;
    const url=`hhtps://www.youtube.com/embed/$`+videoid;

    return(
        <div classname="video-detail col-md-8">
        <div classname="embed-responsive embed-responsive-16by9">
        <iframe classname="embed=resonsive-item" src={url}></iframe>
        </div>
        <div classname="details">
        <div>{video.sinppet.title}</div>
        <div>{video.sinppet.description}</div>
        </div>
        </div>
    );
};
export default Videodetials;