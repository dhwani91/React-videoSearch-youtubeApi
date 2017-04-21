/**
 * Created by dhwani on 4/16/17.
 */
import React from 'react';
import VideoListItem from './video_list_item'

 const videoList=(props)=>{
     var videoItems=props.videos.map((video)=>{
         return(
             <VideoListItem
                 onVideoSelect={props.onVideoSelect}
                 key={video.etag} video={video} />
         )
     });
     return(
         <ul className="col-md-4 list-group">
             {videoItems}
         </ul>
     );

 };
 export  default videoList;