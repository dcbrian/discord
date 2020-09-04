import React, { FC } from 'react';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  root: {}
}));

const Login: FC<unknown> = () => {
  const classes = useStyles();

  return <span>This is login</span>;
};

export default Login;
