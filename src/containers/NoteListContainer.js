import { connect } from 'react-redux';
import _ from 'lodash';
import { withRouter } from 'react-router-dom';

import NoteView from '../components/NoteList';

const mapStateToProps = (state) => {
  const notes = _.transform(
    state.notes,
    (result, value, id) => {
      result.push({ id, ...value });
    },
    [],
  );
  return { notes };
};

export default withRouter(connect(mapStateToProps)(NoteView));
