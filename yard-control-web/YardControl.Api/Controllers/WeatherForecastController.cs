using Microsoft.AspNetCore.Mvc;

namespace YardControl.Api.Controllers;

[ApiController]
[Route("[controller]")]
public class WeatherForecastController : ControllerBase
{
    string Summary =
    [
        { "message": "Yard Control API is running", "time": DateTime.Now }
    ];

    [HttpGet(Name = "Yard_API")]
    public IEnumerable<WeatherForecast> Get()
    {
        
        
            
            return Summary;
            
        
        
    }
}
