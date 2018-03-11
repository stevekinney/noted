import React from 'react';
import { Route, Link } from 'react-router-dom';

const EditButton = ({ match }) => <Link to={`${match.url}/edit`}>Edit</Link>;
const ViewButton = ({ match }) => <Link to={`/${match.params.id}`}>View</Link>;

const NoteHeader = ({ title, match }) => (
  <header>
    <h1>{ title }</h1>
    <Route exact path="/:id" component={EditButton} />
    <Route path="/:id/edit" component={ViewButton} />
    <Link to="/">Close</Link>
  </header>
);

export default NoteHeader;
