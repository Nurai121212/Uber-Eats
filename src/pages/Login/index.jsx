import axios from 'axios';
import { useForm } from 'react-hook-form';

import Form from '../../components/Form';
import Button from '../../components/Button';
import { Input } from '../../components/Input';
import { useCookies } from 'react-cookie';

export default function Login(){
  const [, setCookies] = useCookies(['my_token'])
  const {register, setError, handleSubmit, formState : {errors}} = useForm({
    mode: "onBlur"
  });

  const onSubmit = async(data) => {
    try{
      const res = await axios.post('http://localhost:1717/login', data);
      if(res.status === 200){
        setCookies('my_token', res.data.token, {path: '/', maxAge: 3600})
      }
    }catch(err){
      setError('username', {type: 'custom', message: err.response.data})
      setError('password', {type: 'custom', message: err.response.data})
    }

  };

  return(
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Input
        error={errors?.username?.message}
        inputname = 'username'
        label = 'Username: '
        {...register("username", {
          required: 'Enter username !',
          minLength: {
            value: 5,
            message: "More than 5 letters !"
          },
          pattern:{
            value: /^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{0,29}$/g,
            message: 'Doesnt Validate !'
          }
        })}
      />
      <Input
        error = {errors?.password?.message}
        inputname = 'password'
        label = "Password: "
        type = 'password'
        {...register('password', {
          required: 'Enter password !',
          minLength:{
            value: 8,
            message: 'password should has more than 8 symbols.'
          },
          pattern: {
            value: /[A-Za-z0-9]+/g,
            message: 'doesnt validate'
          }
        })}
      />
      <Button type="submit">Log In</Button>
    </Form>
  )
}