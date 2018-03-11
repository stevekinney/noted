import React from 'react';
import Styles from '~/styles.css';

const EmptyState = () => (
  <article className={Styles.content}>
    <h1>EmptyState</h1>
    <p>
      In this layout, we display the areas in source order for any screen less
      that 500 pixels wide. We go to a two column layout, and then to a three
      column layout by redefining the grid, and the placement of items on the
      grid.
    </p>
  </article>
);

export default EmptyState;
