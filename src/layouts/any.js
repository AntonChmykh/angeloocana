import React from 'react';
import graphql from 'graphql';
import Layout from './_layout';
import { addLocaleData } from 'react-intl';

import messages from '../data/messages/en';
import en from 'react-intl/locale-data/en';
import 'intl/locale-data/jsonp/en';

addLocaleData(en);

export default (props) => (
  <Layout
    {...props}
    i18nMessages={messages}
  />);

export const pageQuery = graphql`
  query LayoutAny {
    site {
      siteMetadata {
        languages {
          defaultLangKey
          langs
        }
        author {
          name
          homeCity
          email
          defaultLink
        }
        sourceCodeLink
        menu {
          label
          link
          slug
          items{
            label
            slug
          }
        }
      }
    }
  }
`;
