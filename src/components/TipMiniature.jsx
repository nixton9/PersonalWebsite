import React from 'react'
import { Link } from 'gatsby'
import { TipMiniatureContainer } from '../styles/components/TipMiniatureContainer'
import { SoftElement } from '../styles/components/SoftElement'
import { formatLanguages } from '../utils/formatLanguages'

const TipMiniature = ({ post }) => (
  <TipMiniatureContainer className="tip__miniature">
    <SoftElement className="soft">
      <Link to={post.frontmatter.path}>
        <div className="tip__meta">
          <p className="meta__languages">{formatLanguages(post.frontmatter.languages)}</p>
          <h3 className="meta__title">{post.frontmatter.title}</h3>
          <p className="meta__number">#{post.frontmatter.number}</p>
        </div>
        <img alt={post.frontmatter.title} src={post.frontmatter.img} />
      </Link>
    </SoftElement>
  </TipMiniatureContainer>
)

export default TipMiniature