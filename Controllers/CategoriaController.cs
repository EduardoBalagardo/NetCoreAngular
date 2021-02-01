using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using NetCoreAngular.Clases;
using NetCoreAngular.Models;

namespace NetCoreAngular.Controllers
{
    public class CategoriaController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
        
        [HttpGet]
        [Route("api/get-categoria")]
        public IEnumerable<CategoriaCLS> listarCategoria()
        {
            using (BDRestauranteContext db = new BDRestauranteContext())
            {
                IEnumerable<CategoriaCLS> listCategory = (
                    from categoria in db.Categoria
                    where categoria.Bhabilitado == 1
                    select new CategoriaCLS
                    {
                        idCategoria = categoria.Iidcategoria,
                        nombreCategoria = categoria.Nombre
                    }).ToList();
                return listCategory;
            }           
        }

     
    }


}


