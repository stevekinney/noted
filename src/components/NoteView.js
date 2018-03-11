import React from 'react';
import { Route } from 'react-router-dom';

import Markdown from 'react-markdown';

import Styles from '~/styles.css';

import NoteHeader from './NoteHeader';
import Editor from '../containers/EditorContainer';

export default (props) => {
  const {
    title, body, id, match
  } = props;
  return (
    <article className={Styles.content}>
      <NoteHeader title={title} match={match} />
      <Markdown source={body} />
      <Route path="/:id/edit" component={Editor} />
    </article>
  );
};
