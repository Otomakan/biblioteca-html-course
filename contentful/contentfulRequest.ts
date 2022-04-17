import axios from 'axios'
import { AvailableContentType, Course } from '../types'
const contentful = require("contentful")
const contentFulToken = process.env.CONTENTFUL_ACCESS_TOKEN
const spaceId = process.env.CONTENTFUL_SPACE_ID


export const contentfulRequest = axios.create({
    headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${contentFulToken}`,
    },
    baseURL: `https://cdn.contentful.com/spaces/${spaceId}/environments/master/`
})

export const contentfulRequestGaphql = axios.create({
    headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${contentFulToken}`,
    },
    method: 'post',
    baseURL: `https://graphql.contentful.com/content/v1/spaces/${spaceId}`
})

export const graphQLQuery = async (query: string) => {
    const res = await contentfulRequestGaphql({
        data: {
            query
        }
    })
    return res

}