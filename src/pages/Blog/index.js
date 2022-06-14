import React from 'react'
import BlogMain from '../../components/BlogMain'
import Breadcrumbs from '../../components/Breadcrumbs'
import NavBar from '../../components/NavBar'

const Blog = () => {
    const place="blog"
  return (
    <>
        <NavBar place={place} />
        <Breadcrumbs />
        <BlogMain />
    </>
  )
}

export default Blog