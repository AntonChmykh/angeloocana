import React from 'react';
import LanguagesPage from '../../../components/Resume/LanguagesPage';
import graphql from 'graphql';

export default (props) =>
  <LanguagesPage
    {...props}
  />;

export const pageQuery = graphql`
  query ResumeLanguagesPt {
    site {
      siteMetadata {
        resume {
          menu {
            label
            link
          }
          educations {
            name
            subject {
              pt
            }
            needWhiteBg
            link
            fullName
            years
            img
          }
        }
      }
    }
  }
`;
