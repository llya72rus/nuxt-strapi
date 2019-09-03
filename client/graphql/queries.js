import gql from 'graphql-tag'

export const GET_INTRO_RU = gql`
  query GET_INTRO_RU($id: ID!) {
    intro(id: $id) {
      title_ru
      markdown_content_ru
      image_ru {
        url
      }
    }
  }
`

export const GET_INTROS_RU = gql`
  {
    intros {
      title_ru
    }
  }
`

export const GET_FEATURE_RU = gql`
  query GET_FEATURE_RU($id: ID!) {
    feature(id: $id) {
      title_ru
    }
  }
`

export const GET_NAV_RU = gql`
  {
    navigations {
      title_ru
      url
      id
    }
  }
`
export const GET_FOOTER_RU = gql`
  query GET_FOOTER_RU {
    footer(id: 1) {
      footer_info_ru
    }
  }
`

export const GET_ACCORDION_RU = gql`
  query GET_ACCORDION_RU {
    accordions {
      title_ru
      desc_ru
    }
  }
`

export const GET_INTRO_EN = gql`
  query GET_INTRO_EN($id: ID!) {
    intro(id: $id) {
      title_en
      markdown_content_en
      image_en {
        url
      }
    }
  }
`

export const GET_INTROS_EN = gql`
  {
    intros {
      title_ru
    }
  }
`

export const GET_FEATURE_EN = gql`
  query GET_FEATURE_EN($id: ID!) {
    feature(id: $id) {
      title_en
    }
  }
`

export const GET_NAV_EN = gql`
  {
    navigations {
      title_en
      url
      id
    }
  }
`
export const GET_FOOTER_EN = gql`
  query GET_FOOTER_EN {
    footer(id: 1) {
      footer_info_en
    }
  }
`
export const GET_ACCORDION_EN = gql`
  query GET_ACCORDION_EN {
    accordions {
      title_en
      desc_en
    }
  }
`
