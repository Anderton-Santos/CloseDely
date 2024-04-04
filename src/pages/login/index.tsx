import {Link, useNavigate} from 'react-router-dom'
import {Form} from '../../components/form'
import { FormEvent, useState } from 'react'

import {auth} from '../../components/services/firebaseConnection'
import {signInWithEmailAndPassword} from 'firebase/auth'

export function Login(){

    const [user, setUser] = useState('');
    const [password, setPassword] = useState('')
    const navigate = useNavigate();

    function handleSubmit(e :FormEvent){
        e.preventDefault();

        if(user === '' || password === ''){
            alert('Preencha os campos!')
            return
        }

        signInWithEmailAndPassword(auth, user, password)
            .then(()=>{
                console.log("LOGADO")
                navigate("/home", {replace: true})


            })
            .catch(()=>{
                console.log("ERRO AO LOGAR")
                console.log(Error)
            })
        

    }


    return(
        <div className='flex h-screen w-full items-center justify-center flex-col'>
            <Link to='/'>
                <h1 className='mt-11 text-vlck mb-7 font-bold text-5xl'>Close
                <span className='bg-gradient-to-r from-yellow-500 to-orange-400 bg-clip-text text-transparent'>Dely</span>
                </h1>

            </Link>
                
                <form onSubmit={handleSubmit} className='w-full max-w-xl flex flex-col px-2'>
                    <Form
                    placeholder='Digite seu usuário'
                    type='text'
                    value={user}
                    onChange={(e) => setUser(e.target.value)}
                    />

                    <Form
                    placeholder='**********'
                    type='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    />

                    <button
                    type='submit' 
                    className='h-9 bg-blue-600 rounded border-0 text-lg font-medium text-white'>
                        Acessar
                    </button>
                </form>
            
            

        </div>
    )
}