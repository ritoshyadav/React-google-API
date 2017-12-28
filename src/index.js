
import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './component/search_bar';
import Videolist from './component/video_list';
import VideoDetail from './component/video_detail';
const API_KEY='AIzaSyAH8r9yYUt5l_OrfxPkuZeoqyYI47G6pbE';
class  App extends component{
    constructor(props){
        supper(props);
        this.state={
            video:[],
            selectedvideo:null
        };
        YTSearch({key:API_KEY,term:'surboards'},function(data){
            this.setstate({
                video:videos,
                selectedvideo:videos[0]
         });
    });
    }
render(){
    return(
    <div>
        <SearchBar/>
        <VideoDetail video={this.state.selectedvideo}/>
        <Videolist onvideoselected={selectedvideos=>this.setstate({selectedvideo})}
        videos={this.state.videos}/>
    </div>
    );
}
}
ReactDOM.render(<App/>,document.querySelector('.container'));