namespace YardControl.Api.Controllers;
using Microsoft.AspNetCore.Mvc;



[ApiController]
[Route("[controller]")]
public class WeatherForecastController : ControllerBase
{
    private readonly string Summaries =  ("message: Yard Control API is running time: " + DateTime.Now.ToString());

    [HttpGet(Name = "GetWeatherForecast")]
    public IEnumerable<WeatherForecast> Get()
    {
        return Enumerable.Range(0, 1).Select(index => new WeatherForecast
        {
            Summary = Summaries
        })
        .ToArray();
    }
}
