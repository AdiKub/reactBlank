import React from 'react';
import { connect } from 'react-redux';
import {  } from '../../store/actions';

import FirstComponent from '../../components/FirstComponent';

const FirstComponentContainer = props => <FirstComponent {...props} />;

const mapStateToProps = store => ({
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(FirstComponentContainer);