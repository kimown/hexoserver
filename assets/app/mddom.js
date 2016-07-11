/**
 * Created by kimown on 4/23/16.
 */
var React = require('react');

var dbJson=require("./../../../../db.json");
var post=dbJson.models.Post;
var mdAll = {};

//只加载当前md
var curPostId  = document.getElementsByClassName('article-share-link')[0].dataset.id.trim();
var curPostMdName = '';
post.forEach((v)=>{
    if(v._id ==curPostId){
        curPostMdName = v.slug+".md";
    }
})

mdAll[curPostId]=require("./../../../../source/_posts/"+curPostMdName);
var Dom = React.createClass({

    render: function() {
        let html = mdAll[curPostId];
        return (
            <div dangerouslySetInnerHTML={{__html:html}} />
        );
    }
});
module.exports=Dom;
