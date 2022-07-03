interface IUsuario {
  id: string,
  email: string,
  cargo?: 'Gerente' | 'Coordenador' | 'Supervisor' 
};

// interface IAdmin extends IUsuario {
//   cargo: 'Gerente' | 'Coordenador' | 'Supervisor' 
// };

function redireciona(usuario: IUsuario) {
  if (usuario.cargo) {
    console.log('possui')
  } else {
    console.log('Não possui')
  }
}

redireciona({
  id: '01',
  email: 'roge@gmail.com',
  cargo: 'Gerente'
});
