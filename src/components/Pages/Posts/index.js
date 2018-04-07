import React from 'react'
import FeaturesList from '../../FeaturesList'
import './Posts.css'

const Posts = () => (
    <article className="posts">
        <h1 className="posts__title">Lista de Posts</h1>
        <FeaturesList />
    </article>
)

export default Posts