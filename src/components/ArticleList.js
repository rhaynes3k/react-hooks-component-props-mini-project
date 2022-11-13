import React from 'react'
import Article from './Article'

function ArticleList({posts}) {
  console.log(posts)
  const art = posts.map(post => (
    <Article key={post.id} title={post.title} date={post.date} preview={post.preview} />
  ))
  return(
    <main>{art}</main>
  )
}
export default ArticleList
