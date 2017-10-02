import React from 'react'
import Panel from '../panel'

const formatArticles = articles =>
  articles.map((article, i) =>
    (
      <div className="article" key={i}>
        <h1 className="article__title"><a href={article.url}>{article.title}</a></h1>
        <p className="article__description">{article.description}</p>
      </div>
    ),
  )

export default ({ position, data: { articles = [] } = {} }) => (
  <Panel position={position}>
    <div className="news">
      {formatArticles(articles)}
    </div>
  </Panel>
)
