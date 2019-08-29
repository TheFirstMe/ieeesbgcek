import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const Index = ({data}) => (
    <Layout location="/" title={data.site.siteMetadata.title}>
        <SEO title="Home" />
        <h1>Test</h1>
    </Layout>
)

export default Index

export const pageQuery = graphql`
    query{
        site{
            siteMetadata{
                title
            }
        }
    }
`