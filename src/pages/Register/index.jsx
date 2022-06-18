import { useForm } from 'react-hook-form';
import usersApi from '../../components/apiRequest';
import useAuth from '../../components/hooks/useAuth';

import Button from '../../components/UI/Button';
import Form from '../../components/UI/Form'
import { Input } from '../../components/UI/Input';

export default function Register(){
  const [, dispatch] = useAuth();
  const {
    register, 
    setError, 
    handleSubmit, 
    formState: {
      errors
    }} = useForm({ mode: "onBlur" });

  const submitUser = async(data) => {
    try{
      const res = await usersApi.register({...data, age: parseInt(data.age)});
      dispatch.setUser(res.token, res.data)
    }catch(e){
      setError('username', {
        type: 'custom', 
        message: e.response.data
      })
    }
    
  };

  return(
    <Form onSubmit={handleSubmit(submitUser)}>
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
        error = {errors?.firstName?.message}
        inputname = 'firstName'
        label = "First Name: "
        {...register('firstName', {
          required: 'enter first name',
          minLength:{
            value: 3,
            message: 'first name should has more than 3 letters'
          },
          pattern:{
            value: /^[a-zA-Z\s]*$/g,
            message: 'first name should has only letters'
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
            message: 'doesnt validate'
          }
        })}
      />
      <Input
        error = {errors?.age?.message}
        inputname = 'age'
        label = 'Age: '
        {...register('age', {
          required: 'enter your age',
          pattern:{
            value: /[0-9]/g,
            message: 'age should has only numbers'
          }
        })}
      />
      <Button>Sign In</Button>
    </Form>
  )
}