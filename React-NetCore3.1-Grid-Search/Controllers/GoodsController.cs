using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace React_NetCore3._1_Grid_Search.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class GoodsController : ControllerBase
    {
        private readonly ILogger<GoodsController> _logger;

        public GoodsController(ILogger<GoodsController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public IEnumerable<Goods> Get()
        {
            var result = new List<Goods>
            {
                new Goods {Id = 1, Name = "Coors", Price = 2.55m},
                new Goods {Id = 2, Name = "Corona", Price = 2.51m},
                new Goods {Id = 3, Name = "Yanjing", Price = 3.02m},
                new Goods {Id = 4, Name = "Harbin", Price = 3.20m},
                new Goods {Id = 5, Name = "Heineken", Price = 1.99m},
                new Goods {Id = 6, Name = "Skol", Price = 2.03m},
                new Goods {Id = 7, Name = "Bud Light", Price = 2.98m},
                new Goods {Id = 8, Name = "Tsingtao", Price = 2.74m},
                new Goods {Id = 9, Name = "Budweiser", Price = 3.05m},
                new Goods {Id = 10, Name = "Snow", Price = 3.55m}
            };
            return result;
        }
    }
}
