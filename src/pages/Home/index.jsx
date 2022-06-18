import useAuth from "../../components/hooks/useAuth";

export default function Home(){  
  const [state] = useAuth();

  return(
    <>
      {state.user.data != null ? (<div>Hello {state.user.data.username}</div>): (<div>You are not loggined</div>)}
    </>
  )
}