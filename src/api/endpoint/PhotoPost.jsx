import React from 'react'

function PhotoPost() {

    const [token, setToken] = React.useState(''); 
    const [nome, setNome] = React.useState('');
    const [peso, setPeso] = React.useState('');
    const [idade, setIdade] = React.useState('');
    const [img, setImg] = React.useState('');



    
  return (
    <form>

        <input type="text" 
        placeholder='Token' 
        value={token} 
        onChange={({ target }) => setToken(target.value)} />

        <input type="text"
        placeholder='username'
        value={nome}
        onChange={({ target }) => setNome(target.value)} />

       

        
      
    </form>
  )
}

export default PhotoPost
