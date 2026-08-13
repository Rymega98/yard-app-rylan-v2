using Microsoft.AspNetCore.Mvc;

namespace YardControl.Api.Controllers;

[ApiController]
[Route("[controller]")]
public class WeatherForecastController : ControllerBase
{
    private static readonly string Summaries = [{ "message:", "Yard Control API is running", "time:", dateTime.Now.ToString() }];

    [HttpGet(Name = "GetWeatherForecast")]
    public IEnumerable<WeatherForecast> Get()
    {
        Summary = Summaries
        return Summary
    }
}
