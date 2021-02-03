using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using NetCoreAngular.Clases;
using NetCoreAngular.Models;

namespace NetCoreAngular.Controllers
{
    public class UsuarioController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
        [HttpGet]
        [Route("api/usuarios/lista-usuarios-tipo")]
        public IEnumerable<TipoUsuarioCLS> getTipoUsuario() {

            try {
                using (BDRestauranteContext bd = new BDRestauranteContext() ){
                    List<TipoUsuarioCLS> listTipoUsuario = (from tipoUsuario in bd.TipoUsuario
                                                            where tipoUsuario.Bhabilitado == 1
                                                            select new TipoUsuarioCLS
                                                            {
                                                                iidtipousuario = tipoUsuario.Iidtipousuario,
                                                                nombre = tipoUsuario.Nombre
                                                            }).ToList();
                    return listTipoUsuario;
                }                

            } catch (Exception e) {
                return null;
            }

        }

        [HttpGet]
        [Route("api/usuarios/listar-usuarios")]
        public IEnumerable<UsuarioCLS> listarUsuario() {
            using (BDRestauranteContext bd = new BDRestauranteContext()) {
                List<UsuarioCLS> listarUsuario = (from usuario in bd.Usuario
                                                  join persona in bd.Persona on usuario.Iidpersona equals persona.Iidpersona
                                                  join tipoUsuario in bd.TipoUsuario on usuario.Iidtipousuario equals tipoUsuario.Iidtipousuario
                                                  where usuario.Bhabilitado == 1
                                                  select new UsuarioCLS
                                                  {
                                                      iidusuario = usuario.Iidusuario,
                                                      nombreusuario = usuario.Nombreusuario,
                                                      nombrePersona = persona.Nombre + " " + persona.Apmaterno + " " + persona.Apmaterno,
                                                      nombreTipoUsuario = tipoUsuario.Nombre,
                                                  }).ToList();
                return listarUsuario;
            }
        }

        [HttpGet]
        [Route("api/usuario/filtrar-usuario-tipo/{idTipoUsuario?}")]
        public IEnumerable<UsuarioCLS> filtrarUsuarioPorTipo(int idTipoUsuario) {
            using (BDRestauranteContext db = new BDRestauranteContext()) {
                List<UsuarioCLS> listaUsuariosTipo = (from usuario in db.Usuario
                                                      join persona in db.Persona
                                                      on usuario.Iidpersona equals persona.Iidpersona
                                                      join tipoUsuario in db.TipoUsuario
                                                      on usuario.Iidtipousuario equals tipoUsuario.Iidtipousuario
                                                      where usuario.Bhabilitado == 1
                                                      && usuario.Iidtipousuario == idTipoUsuario
                                                      select new UsuarioCLS {
                                                          iidusuario = usuario.Iidusuario,
                                                          nombreusuario = usuario.Nombreusuario,
                                                          nombrePersona = persona.Nombre + " " + persona.Apmaterno + " " + persona.Apmaterno,
                                                          nombreTipoUsuario = tipoUsuario.Nombre
                                                      }
                                                      ).ToList();
                return listaUsuariosTipo;
            }
        }

    }
}
