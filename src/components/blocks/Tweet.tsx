import React, { useEffect, useRef } from 'react';
import styles from './tweet.module.scss'

export const Tweet: React.FC<{ id: string }> = ({ id }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // @ts-expect-error
    window.twttr?.widgets.load(ref.current);
  }, [id]);

  return (
    <div className={styles.tweet}
      dangerouslySetInnerHTML={{ __html: generateEmbedHtml(id) }}
      ref={ref}
    />
  );
};

const generateEmbedHtml = (id: string): string => {
  return `<blockquote class="twitter-tweet"><a href="https://twitter.com/rude_rockers/status/${id}"></a></blockquote>`;
};