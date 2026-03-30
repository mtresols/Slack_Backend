import ENVIRONMENT from "./config/environment.config.js"
import connectMongoDB from "./config/mongoDB.config.js"
import User from "./models/user.model.js"
import Workspace from "./models/workspace.model.js"
import WorkspaceMember from "./models/workspaceMember.model.js"
import workspaceMemberRepository from "./repository/member.repository.js"
import userRepository from "./repository/user.repository.js"
import workspaceRepository from "./repository/workspace.repository.js"
import memberRepository from "./repository/member.repository.js"
import express from "express";
import healthRouter from "./routes/health.router.js"
import authRouter from "./routes/auth.router.js"
import mailerTransporter from "./config/mail.config.js"
import cors from 'cors'
import workspaceRouter from "./routes/workspace.router.js"


console.log('hola mundo')
console.log(ENVIRONMENT.MONGO_DB_CONNECTION_STRING)

await connectMongoDB()
//workspaceRepository.create('test 1', 'test 1', 'test 1', true)
//await workspaceMemberRepository.getMemberList('69c848711992065e8779aa9a')


// Llamas al REPOSITORIO que ya importaste arriba
/*await workspaceMemberRepository.create(
    '69937015287b551d734b7f0b', // id_workspace (PRIMERO según tu repo)
    '69c848711992065e8779aa9a', // id_user (SEGUNDO según tu repo)
    'owner'                      // role
);
console.log("¡Miembro creado con éxito en la DB!");*/
await workspaceMemberRepository.getMemberList('69937015287b551d734b7f0b')


const app = express();
app.use(cors())
app.use(express.json());
app.use('/api/workspace', workspaceRouter)

// Logger global para depuración
app.use((req, res, next) => {
    console.log(`Petición recibida: ${req.method} ${req.url}`);
    next();
});

app.use('/api/auth', authRouter);

app.get('/api/health',
    (req, res) => {
        res.status(200).json(
            {
                message: 'API is alive',
                status: 200,
                ok: true
            }
        )
    }
)

app.listen(ENVIRONMENT.PORT,
    () => {
        console.log(`Server running on port ${ENVIRONMENT.PORT}`)
    }
)




// El sistema de envío de e-mails se maneja en AuthService


/* 
sistema de login y registro
verificacion de correo electronico de un usuario
mailing

un usuario se registra le enviamos un mail con un link, da click al link desde el mail y así sabemos que su mail está verificado
para dar click debe estar en su correo electronico
*/

/*
/api/auth POST /register body: { email, username, password }

response: {
    ok: true,
    status: 201,
    message: "Usuario Creado exitosamente"
}

Registrar un usuario en la DB
Validar que el usuario no exista previamente en la DB (con el mismo mail), si existe dar error con status: 400


/*

POST /login 
body: {
    email,
    password
}

response: {
    ok: true,
    status: 200,
    message: "Usuario logueado exitosamente"
}

Si no se encuentra usuario con ese mail: 
{
    ok: false,
    status: 404,
    message: "Usuario no encontrado"
}

Si las credenciales no son correctas entonces: 
{
    ok: false,
    status: 401,
    message: "Credenciales incorrectas"
}
*/






















/*async function crearUsuario(username, email, password) {
    await User.create({
        name: username,
        email: email,
        password: password
    })
}

//crearUsuario('Juan', 'juan@gmail.com', '123')

async function crearWorkspace(title, description, url_image) {
    await Workspace.create({
        title: title,
        description: description,
        url_image: url_image
    })
}

//crearWorkspace('Juan', 'juan@gmail.com', '123')
//crearWorkspace('titulo1', 'auinbsaoimdsaop', 'https://www.google.com/oficina1')
//crearWorkspace('titulo2', 'auinbsaoimdsaop', 'https://www.google.com/oficina2')

async function createMember(id_user, id_workspace, role = 'user') {
    await WorkspaceMember.create({
        fk_id_user: id_user,
        fk_id_workspace: id_workspace,
        role: role
    })
}

createMember('698ccfad8c9c6a29dd679430', '698cd94b1f0a5410ec70e608', 'owner')
*/
