import gql from "graphql-tag";

const ARTICLES_QUERY = gql`  
  query Articles {
    articles {
      id
      title
      image {
        url
      }
      content
    }
  }
`;
export default ARTICLES_QUERY;