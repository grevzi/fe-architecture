import React from 'react';
import {ArticleTemplate} from "../../templates/ArticleTemplate";

export const ArticlePage = () => {
  return (
    <ArticleTemplate
      Header={<Header />}
      Features={<Features />}
      News={<News />}
    />
  );
};