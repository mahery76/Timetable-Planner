import React, { useEffect, useRef, useState } from 'react'
import getUserInfo from '../Api/getUserInfo'
import { Navigate } from 'react-router-dom'
import logoEjeryemploi from '../Assets/logo.png'


function Connexion() {
  //put into this all infos from form
  const [userInfo, setUserInfo] = useState({})
  //username from form
  const username = useRef()
  // password from form
  const password = useRef()
  // put here the response from get request
  const [resData, setResData] = useState({})
  // for checking if infos from form are ready to be shown
  const [showFormData, setShowFormData] = useState(false);

  const [authenticated, setAuthenticated] = useState(false)
  const onSubmit = (e) => {
    e.preventDefault()
    setUserInfo({
      username: username.current.value,
      password: password.current.value
    })
    // get the infos from form ready to be shown
    setShowFormData(true)
  }

  useEffect(() => {
    if (showFormData) {
      console.log("ireto ilay avy am forme", userInfo.username, userInfo.password)
      getUserInfo(userInfo, setAuthenticated)
        .then((userInfos => {
          setResData(userInfos)
        }))
    }
  }, [userInfo])

  if (!authenticated) {
    return (
      <div className=' flex flex-col justify-center items-center h-screen '>
        <div className='bg-slate-50 border-2 border-gray-200 p-4 flex flex-col items-center rounded-xl'>
        <img src={logoEjeryemploi} className='mt-2 w-36' alt="" />

          <form className="p-8 flex flex-col justify-center items-center  " onSubmit={onSubmit} >
            <input placeholder='Email' className="mb-8 text-center bg-white border border-sky-700 rounded-lg h-10 pl-2        w-64" type="text" ref={username} />
            <input placeholder='Mot de passe' className="mb-4 text-center bg-white border border-sky-700 rounded-lg h-10 pl-2 w-64" type="password" ref={password} />
            <div className="w-full flex justify-between">
              <input className="cursor-pointer mt-2 mb-4 text-center border border-1  border-sky-700 rounded-lg h-10 px-2 hover:bg-sky-200 bg-sky-100   cursor-type" type="submit" value="Se connecter" />
              <input className="cursor-pointer mt-2 mb-4 text-center border border-1 border-pink-700 rounded-lg h-10 px-2 hover:bg-pink-200 bg-pink-100 cursor-type" type="reset" value="Effacer" />
            </div>
          </form>
        </div>
      </div>
    )
  }
  else if(resData['Role']['nom_role']==="employee"){
    return <Navigate replace to="/employee" />
  }
  else if(resData['Role']['nom_role']==="admin"){
    return <Navigate replace to="/admin" />
  }

}

export default Connexion