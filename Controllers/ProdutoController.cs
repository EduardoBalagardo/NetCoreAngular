using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using NetCoreAngular.Clases;
using NetCoreAngular.Models;

namespace NetCoreAngular.Controllers
{
    public class ProdutoController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        [HttpGet]
        [Route("api/producto/listar-productos")]
        public IEnumerable<ProductoCLS> listarProductos() 
        {
            using (BDRestauranteContext db = new BDRestauranteContext()) {
                List<ProductoCLS> lista = (
                                          from producto in db.Producto
                                          join categoria in db.Categoria
                                          on producto.Iidcategoria equals
                                          categoria.Iidcategoria
                                          where producto.Bhabilitado == 1

                                          select new ProductoCLS
                                          {
                                              idProducto = producto.Iidproducto,
                                              nombre = producto.Nombre,
                                              precio = (decimal)producto.Precio,
                                              stock  = (int)producto.Stock,
                                              nombreCategoria = categoria.Nombre
                                          }).ToList();
                return lista;


            }

        }

        [HttpGet]
        [Route("api/producto/listar-productos-nombre/{nombre}")]
        public IEnumerable<ProductoCLS> filtrarProductoPorNombre( string nombre )
        {
            using (BDRestauranteContext db = new BDRestauranteContext())
            {
                List<ProductoCLS> lista = (
                                          from producto in db.Producto
                                          join categoria in db.Categoria
                                          on producto.Iidcategoria equals
                                          categoria.Iidcategoria
                                          where producto.Bhabilitado == 1
                                          && producto.Nombre.ToLower().Contains(nombre.ToLower())
                                          select new ProductoCLS
                                          {
                                              idProducto = producto.Iidproducto,
                                              nombre = producto.Nombre,
                                              precio = (decimal)producto.Precio,
                                              stock = (int)producto.Stock,
                                              nombreCategoria = categoria.Nombre
                                          }).ToList();
                return lista;


            }

        }

        [HttpGet]
        [Route("api/producto/listar-categoria-producto/{idcategoria}")]
        public IEnumerable<ProductoCLS> filtrarProductoPorCategoria(int idcategoria) 
        { 
            using(BDRestauranteContext db = new BDRestauranteContext())
            {
                List<ProductoCLS> lista = (from producto in db.Producto
                                           join categoria in db.Categoria
                                           on producto.Iidcategoria equals categoria.Iidcategoria
                                           where producto.Bhabilitado == 1 && producto.Iidcategoria == idcategoria
                                           select new ProductoCLS {
                                               idProducto = producto.Iidproducto,
                                               nombre = producto.Nombre,
                                               precio = (decimal)producto.Precio,
                                               stock = (int)producto.Stock,
                                               nombreCategoria = categoria.Nombre
                                           }).ToList();
                return lista;
            
            }
        }

       
    }
}
