/**
 * Created by kimown on 4/23/16.
 */
const React = require('react')
// eslint-disable-next-line
const dbJson = require('./../../../../db.json')

const post = dbJson.models.Post


// only load current markdown
const curPostId = document.getElementsByClassName('article-share-link')[0].dataset.id.trim()
let curPostMdName = ''
post.forEach((v) => {
    // eslint-disable-next-line
    if (v._id === curPostId) {
      curPostMdName = `${v.slug}.md`
    }
})


const mdAll = {}
// eslint-disable-next-line
mdAll[curPostId] = require(`./../../../../source/_posts/${curPostMdName}`)
const Dom = React.createClass({
  render: () => {
    const html = mdAll[curPostId];
    return (
      <div dangerouslySetInnerHTML={{ __html: html }} />
    )
  }
})

module.exports = Dom
