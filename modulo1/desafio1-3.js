const usuarios = [
    {
        nome: "Carlos",
        tecnologias: ["HTML", "js"]
    },

    {
        nome: "Jasmine",
        tecnologias: ["JavaScript", "java"]
    },

    {
        nome: "Tuane",
        tecnologias: ["HTML", "Node.js"]
    }
];



for (let i = 0; i < usuarios.length; i++) {

    console.log(usuarios[i].nome + " trabalha com a tecnologia " + usuarios[i].tecnologias)
}


function userCheck(usuario) {
    for (let i = 0; i < usuario.tecnologias.length; i++) {
        if (usuario.tecnologias[i] === "CSS ") {
            return  true

        }
        
    }
    
    return  false
}

console.log(userCheck(usuarios[0]))

