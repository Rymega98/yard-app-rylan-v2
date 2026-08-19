namespace YardControl.Api.Controllers;
using Microsoft.AspNetCore.Mvc;



[ApiController]
[Route("[controller]")]
public class YardAPIController : ControllerBase
{
    private readonly string Summaries =  ("message: Yard Control API is running time: " + DateTime.Now.ToString());

    [HttpGet(Name = "GetYardAPI")]
    public IEnumerable<YardAPI> Get()
    {
        return Enumerable.Range(0, 1).Select(index => new YardAPI
        {
            Summary = Summaries
        })
        .ToArray();
    }
}
