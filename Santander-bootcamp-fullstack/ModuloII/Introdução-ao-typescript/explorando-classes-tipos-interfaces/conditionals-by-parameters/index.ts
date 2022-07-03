interface IUsuario {
  id: string,
  email: string
};

interface IAdmin extends IUsuario {
  cargo: 'Gerente' | 'Coordenador' | 'Supervisor' 
};

function redireciona(usuario: IAdmin | IUsuario) {
  if ('cargo' in usuario) {
    console.log('possui')
  }
  console.log('não possui')
}
