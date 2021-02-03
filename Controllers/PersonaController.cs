using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using NetCoreAngular.Clases;
using NetCoreAngular.Models;

namespace NetCoreAngular.Controllers
{
    public class PersonaController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        [HttpGet]
        [Route("api/listar-personas")]
        public IEnumerable<PersonaCLS> listarPersonas() 
        {
            using (BDRestauranteContext db = new BDRestauranteContext()) {
                List<PersonaCLS> listaPersona = (from persona in db.Persona
                                                 where persona.Bhabilitado == 1
                                                 select new PersonaCLS {
                                                     iidpersona = persona.Iidpersona,
                                                     nombreCompleto = persona.Nombre + " " + persona.Appaterno + " " + persona.Apmaterno,
                                                     nombre = persona.Nombre,
                                                     apaterno = persona.Apmaterno,
                                                     amaterno = persona.Appaterno,
                                                     telefono = persona.Telefono,
                                                     correo = persona.Correo


                                                 }).ToList();
                return listaPersona;

            }
        }

        [HttpGet]
        [Route("api/persona/filtrar-persona/{nombreCompleto?}")]
        public IEnumerable<PersonaCLS> filtrarPersona(string nombreCompleto)
        {
            List<PersonaCLS> listaPersona;
            using(BDRestauranteContext db = new BDRestauranteContext()){
                if ( nombreCompleto == "" ) {
                    listaPersona = (from persona in db.Persona
                                                     where persona.Bhabilitado == 1
                                                     select new PersonaCLS
                                                     {
                                                         iidpersona = persona.Iidpersona,
                                                         nombreCompleto = persona.Nombre + " " + persona.Appaterno + " " + persona.Apmaterno,
                                                         nombre = persona.Nombre,
                                                         apaterno = persona.Apmaterno,
                                                         amaterno = persona.Appaterno,
                                                         telefono = persona.Telefono,
                                                         correo   = persona.Correo
                                                     }).ToList();
                    return listaPersona;
                } else {
                    listaPersona = (from persona in db.Persona
                                    where persona.Bhabilitado == 1
                                    && (persona.Nombre + " " + persona.Appaterno + " " + persona.Apmaterno).ToLower().Contains(nombreCompleto.ToLower() )
                                    select new PersonaCLS
                                    {
                                        iidpersona = persona.Iidpersona,
                                        nombreCompleto = persona.Nombre + " " + persona.Appaterno + " " + persona.Apmaterno,
                                        nombre = persona.Nombre,
                                        apaterno = persona.Apmaterno,                                        
                                        amaterno = persona.Appaterno,
                                        telefono = persona.Telefono,
                                        correo = persona.Correo
                                    }).ToList();
                    return listaPersona;
                }
            }
        }
    }
}
