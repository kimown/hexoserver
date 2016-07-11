var ReactDOM = require('react-dom');
var React = require('react');
var MdDom = require('./mddom');


__webpack_public_path__ = "http://localhost:4001/";

ReactDOM.render(
    <MdDom />, document.getElementsByClassName('article-entry')[0]
);



