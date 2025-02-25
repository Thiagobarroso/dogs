import React from 'react'

function TokenPost() {

    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [token, setToken] = React.useState('');

    function enviar(event){
        event.preventDefault();

        fetch('https://dogsapi.origamid.dev/json/jwt-auth/v1/token', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username,
                password
            }),
        }).then((response) => {
            console.log(response);
            return response.json();
        }).then((json) => {
            console.log(json);
            setToken(json.token);
            
        });
    }



  return (

      <form onSubmit={enviar}>

        <input type="text" 
            placeholder='usernme'
            value={username}
            onChange={({ target }) => setUsername(target.value)} 
            />

        <input type="text" 
            placeholder='passoword'
            value={password}
            onChange={({ target }) => setPassword(target.value)}
            />
            
            <p>{token}</p>

      <button>Pegar Token</button>
    </form>
  )
}

export default TokenPost
