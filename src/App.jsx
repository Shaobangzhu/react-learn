// useEffectEvent
import { useState, useEffect, useEffectEvent } from "react";

function App() {

  const [url, setUrl] = useState('http://localhost:3000')
  const [param, setParam] = useState('?name=clu')

  const request = useEffectEvent((url) => {
    console.log(`发送请求, 地址是${url}${param}`)
  }) 

  useEffect(() => {
    request(url)
  }, [url])

  return (
    <>
      <div onClick={()=>{setUrl('http://localhost:3001')}}>Change Url</div>
      <div onClick={()=>{setParam('?name=CLU')}}>Change Param</div>
    </>
  )
}

export default App;