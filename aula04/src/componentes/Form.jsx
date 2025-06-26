import {useState} from 'react'


export default function Form(){

    function cadastrarUsuario(e){
        e.preventDefault()
        console.log(`Usuário ${name} foi cadastrado com a senha: ${password}`)
        // console.log(name)
        // console.log('Usuário cadastrado!')
    }

    const [name, setName] = useState()
     const [password, setPassword] = useState()

    return(
        <>
           <h1>Meu cadastro</h1> 
           <form  onSubmit={cadastrarUsuario}>
                <div>
                    <label> 
                        
                    </label>
                    <label  htmlFor="name">Nome: </label>

                    <input  name='name'  value={name}  type="Text" placeholder="Digite seu nome" 
                    // value={name}
                    onChange={(e) => setName(e.target.value)}
                    />
                </div>

                 <div>
                    <label htmlFor="password">Senha: </label>
                    <input name= 'password' type="password" placeholder="Digite sua senha"
                    onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div>
                    <input type="submit" value="Cadastrar" />
                </div>
           </form>
        </>
    )
}