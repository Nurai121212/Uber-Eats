import axios from 'axios';
import Button from '../../components/Button';
import Form from '../../components/Form';
import { useForm } from 'react-hook-form';
import { Input } from '../../components/Input';
import { useCookies } from 'react-cookie';

export default function Register(){
  const [, setCookies] = useCookies(['my_token'])
  const {register, setError, handleSubmit, formState: {errors}} = useForm({
    mode: "onBlur"
  });

  const submitUser = async(data) => {
    try{
      const res = await axios.post('http://localhost:1717/signin', {
        ...data,
        age: parseInt(data.age)
      });

      if(res.status === 200){
        setCookies('my_token', res.data.token, {path: '/', maxAge: 3600});
      }
    }catch(err){
      setError('username', {type: 'custom', message: err.response.data})
    }
  };


  return(
    <Form onSubmit={handleSubmit(submitUser)}>
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
        error = {errors?.firstName?.message}
        inputname = 'firstName'
        label = "First Name: "
        {...register('firstName', {
          required: 'Enter First name !',
          minLength:{
            value: 5,
            message: 'More than 5 letters'
          },
          pattern:{
            value: /^[a-zA-Z\s]*$/g,
            message: 'Only Letters !'
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
      <Input
        error = {errors?.age?.message}
        inputname = 'age'
        label = 'Age: '
        {...register('age', {
          required: 'Enter Your Age !',
          pattern:{
            value: /[0-9]/g,
            message: 'Only numbers !'
          }
        })}
      />
      <Button>Sign In</Button>
    </Form>
  )
}