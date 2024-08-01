import React from 'react';
import Footer from '@theme-original/DocItem/Footer';
import FeedbackButtons from '@site/src/components/FeedbackButtons';

export default function FooterWrapper(props) {
  return (
    <>
      <Footer {...props} />
      <FeedbackButtons />
    </>
  );
}
