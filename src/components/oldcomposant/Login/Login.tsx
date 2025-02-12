import { Box, Button, TextField, Typography } from '@mui/material';
import { useForm, SubmitHandler } from 'react-hook-form';
import { ICredentials } from '../../../@types/Icredentials';
import { useDispatch } from 'react-redux';
import { login } from '../../../store/reducers/userReducer';
import { useAppSelector } from '../../../hooks/redux';
import { useNavigate } from 'react-router-dom';

function Login() {
  // const { register, handleSubmit, control } = useForm<User>();
  // const onSubmit: SubmitHandler<User> = (data) => {
  //   console.log(data);
  // };
  const isLogged = useAppSelector((state) => state.user.isLogged);
  const navigate = useNavigate();

  if (isLogged) navigate('/');

  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ICredentials>();
  const onSubmit: SubmitHandler<ICredentials> = (data) => dispatch(login(data));

  return (
    <Box
      sx={{
        width: 400,
        maxWidth: '100%',
        p: 2,
        bgcolor: 'white',
        color: 'black',
      }}
    >
      <Typography variant="h5" component="h5" gutterBottom>
        Connectez-vous
      </Typography>
      <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ mt: 3 }}>
        <TextField
          fullWidth
          label="pseudo"
          type="pseudo"
          {...register('pseudo', { required: true })}
        />

        <TextField
          fullWidth
          label="Password"
          type="password"
          {...register('password', { required: true })}
        />

        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          sx={{ mt: 3, mb: 2 }}
          disabled={status === 'loading'}
        >
          Se connecter
        </Button>
      </Box>
    </Box>
  );
}

export default Login;
