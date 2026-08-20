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
        return Enumerable.Range(0,1).Select(index => new YardAPI
        {
            Summary = Summaries

        
        })
        .ToArray();
    }
    [HttpGet(Name = "GetYardAPI")]
    public ActionResult<List<Trailer>> GetTrailers()
    {
        var trailers = new List<Trailer>
        {
            new Trailer
            {
                {id: "53154",trailerNumber: "VT-53154",  status: 'ready', spot: "S-140", updatedAt: "8/17/2026",checklist: [
                { key: "seal", label: "Seal Intact", result: "unset" },
                { key: "Trailer number matches", label: "Trailer number matches", result: "unset" },
                { key: "No visible damage", label: "No visible damage", result: "unset" },
                { key: "Exterior", label: "Exterior", result: "unset" },
                { key: "Cargo", label: "Cargo", result: "unset" },
                { key: "doors secure", label: "Doors secure", result: "unset" },] },

                {id: "94032",trailerNumber: "VT-94032",  status: 'arriving', spot: "S-134", updatedAt: "8/15/2026",checklist: [
                { key: "seal", label: "Seal Intact", result: "unset" },
                { key: "Trailer number matches", label: "Trailer number matches", result: "unset" },
                { key: "No visible damage", label: "No visible damage", result: "unset" },
                { key: "Exterior", label: "Exterior", result: "unset" },
                { key: "Cargo", label: "Cargo", result: "unset" },
                { key: "doors secure", label: "Doors secure", result: "unset" },] },

                {id: "71347",trailerNumber: "VT-71347",  status: 'loading', spot: "S-654", updatedAt: "8/16/2026",checklist: [
                { key: "seal", label: "Seal Intact", result: "unset" },
                { key: "Trailer number matches", label: "Trailer number matches", result: "unset" },
                { key: "No visible damage", label: "No visible damage", result: "unset" },
                { key: "Exterior", label: "Exterior", result: "unset" },
                { key: "Cargo", label: "Cargo", result: "unset" },
                { key: "doors secure", label: "Doors secure", result: "unset" },] },

                {id: "13425",trailerNumber: "VT-13425",  status: 'ready', spot: "S-184", updatedAt: "8/17/2026",checklist: [
                { key: "seal", label: "Seal Intact", result: "unset" },
                { key: "Trailer number matches", label: "Trailer number matches", result: "unset" },
                { key: "No visible damage", label: "No visible damage", result: "unset" },
                { key: "Exterior", label: "Exterior", result: "unset" },
                { key: "Cargo", label: "Cargo", result: "unset" },
                { key: "doors secure", label: "Doors secure", result: "unset" },] },

                {id: "82363",trailerNumber: "VT-82363",  status: 'arriving', spot: "S-442", updatedAt: "8/15/2026",checklist: [
                { key: "seal", label: "Seal Intact", result: "unset" },
                { key: "Trailer number matches", label: "Trailer number matches", result: "unset" },
                { key: "No visible damage", label: "No visible damage", result: "unset" },
                { key: "Exterior", label: "Exterior", result: "unset" },
                { key: "Cargo", label: "Cargo", result: "unset" },
                { key: "doors secure", label: "Doors secure", result: "unset" },] },

                {id: "24145",trailerNumber: "VT-24145",  status: 'loading', spot: "S-654", updatedAt: "8/16/2026",checklist: [
                { key: "seal", label: "Seal Intact", result: "unset" },
                { key: "Trailer number matches", label: "Trailer number matches", result: "unset" },
                { key: "No visible damage", label: "No visible damage", result: "unset" },
                { key: "Exterior", label: "Exterior", result: "unset" },
                { key: "Cargo", label: "Cargo", result: "unset" },
                { key: "doors secure", label: "Doors secure", result: "unset" },] },

                {id: "65109",trailerNumber: "VT-65109",  status: 'departed', spot: "S-983", updatedAt: "8/18/2026",checklist: [
                { key: "seal", label: "Seal Intact", result: "unset" },
                { key: "Trailer number matches", label: "Trailer number matches", result: "unset" },
                { key: "No visible damage", label: "No visible damage", result: "unset" },
                { key: "Exterior", label: "Exterior", result: "unset" },
                { key: "Cargo", label: "Cargo", result: "unset" },
                { key: "doors secure", label: "Doors secure", result: "unset" },] },

                {id: "38452",trailerNumber: "VT-38452",  status: 'departed', spot: "S-753", updatedAt: "8/18/2026",checklist: [
                { key: "seal", label: "Seal Intact", result: "unset" },
                { key: "Trailer number matches", label: "Trailer number matches", result: "unset" },
                { key: "No visible damage", label: "No visible damage", result: "unset" },
                { key: "Exterior", label: "Exterior", result: "unset" },
                { key: "Cargo", label: "Cargo", result: "unset" },
                { key: "doors secure", label: "Doors secure", result: "unset" },] }
            }
        };
        return Ok(MockList);
    }
