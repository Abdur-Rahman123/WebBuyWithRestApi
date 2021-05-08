using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using webBuy_with_Rest_API.Repositories;

namespace webBuy_with_Rest_API.Controllers
{
    [RoutePrefix("api/Product")]
    public class ProductController : ApiController
    {
        ProductRepository pr = new ProductRepository();
        public IHttpActionResult Get()
        {
            return Ok(pr.GetAll());
        }
        [Route("cloths")]
        public IHttpActionResult GetCloths()
        {
            var list = pr.GetAll().Where(x => x.categoryId == 2).ToList();
            return Ok(list);
        }
        [Route("electronics")]
        public IHttpActionResult GetElectronics()
        {
            var list = pr.GetAll().Where(x => x.categoryId == 1).ToList();
            return Ok(list);
        }
        [Route("{search}")]
        public IHttpActionResult GetProduct(string search)
        {
            var list = pr.GetAll().Where(x => x.name == search).ToList();
            return Ok(list);
        }

    }
}
