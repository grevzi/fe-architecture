import React from 'react';

export const ArticleTemplate = ({Header, Features, News}) => {
  return (
    <div>
      <Header />
      <Features />
      <News />
    </div>
  );
};