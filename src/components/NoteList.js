import React from 'react';
import Styles from '~/styles.css';

import NoteListItem from './NoteListItem';

const NoteList = ({ notes }) => {
  console.log('NoteList', { notes });
  return (
    <section className={Styles.notelist}>
      { notes.map(note => <NoteListItem {...note} key={note.id} />) }
    </section>
  );
};

export default NoteList;
