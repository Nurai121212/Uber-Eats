import { useForm } from 'react-hook-form';
import useAuth from '../../components/hooks/useAuth';
import usersApi from '../../components/apiRequest';

import Form from '../../components/UI/Form';
import Button from '../../components/UI/Button';
import { Input } from '../../components/UI/Input';

export default function Login(){
  const [, dispatch] = useAuth();
  const {
    register, 
    setError, 
    handleSubmit, 
    formState : {
      errors
    }} = useForm({ mode: "onBlur" });

  const onSubmit = async(data) => {
    try{
      const res = await usersApi.login(data);
      dispatch.setUser(res.token, res.data);
    }catch(e){
      setError('username', {
        type: 'custom', 
        message: e.response.data
      })
    }
  };

  return(
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Input
        error={errors?.username?.message}
        inputname = 'username'
        label = 'Username: '
        {...register("username", {
          required: 'enter username',
          minLength: {
            value: 5,
            message: "username should has more than 5 letters"
          },
          pattern:{
            value: /^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{0,29}$/g,
            message: 'doesnt validate'
          }
        })}
      />
      <Input
        error = {errors?.password?.message}
        inputname = 'password'
        label = "Password: "
        type = 'password'
        {...register('password', {
          required: 'enter password',
          minLength:{
            value: 8,
            message: 'password should has more than 8 symbols.'
          },
          pattern: {
            value: /[A-Za-z0-9]+/g,
            message: 'password should has only letters and numbers'
          }
        })}
      />
      <Button>Log In</Button>
    </Form>
  )
}