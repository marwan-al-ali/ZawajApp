using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ZawajApp.API.Data;
using Microsoft.AspNetCore.Cors;

namespace ZawajApp.API.Controllers
{
    [ApiController]
    [Route("[controller]/[action]")]
    //[EnableCors("CorsPolicy")]
    public class ValuesController : ControllerBase
    {
        private readonly DataContext context;

        public ValuesController(DataContext context)
        {
            this.context = context;
        }
        // GET: Values
        [HttpGet]
        public async Task<IActionResult> GetValues()
        {
            var values = await this.context.Values.ToListAsync();
            return Ok(values);
        }

        // GET: Values/Details/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetValue(int id)
        {
            return Ok(await this.context.Values.FirstOrDefaultAsync(x=>x.id == id));
        }

        // GET: Values/Create
        
    }
}