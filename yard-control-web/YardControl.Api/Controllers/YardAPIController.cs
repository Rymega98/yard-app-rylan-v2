namespace YardControl.Api.Controllers;
using Microsoft.AspNetCore.Mvc;
using YardControl.Api;


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
    [HttpGet("trailers")]
    public ActionResult<List<Trailer>> GetTrailers()
    {
        var trailers = new List<Trailer>
        {
            new Trailer
            {
                Id = "53154",
                TrailerNumber = "VT-53154",
                Status = "ready",
                Spot = "S-140",
                UpdatedAt = "8/17/2026",
                Checklist = new List<ChecklistItem>{
                    new ChecklistItem
                    {
                        Key = "seal",
                        Label = "Seal Intact",
                        Result = "unset"},

                    new ChecklistItem
                    {
                        Key = "Trailer number matches",
                        Label = "Trailer number matches",
                        Result = "unset"},

                    new ChecklistItem
                    {
                        Key = "No visible damage",
                        Label = "No visible damage",
                        Result = "unset"
                    },
                    new ChecklistItem
                    {
                        Key = "Exterior",
                        Label = "Exterior",
                        Result = "unset"
                    },
                    new ChecklistItem
                    {
                        Key = "Cargo",
                        Label = "Cargo",
                        Result = "unset"
                    },
                    new ChecklistItem
                    {
                        Key = "doors secure",
                        Label = "Doors secure",
                        Result = "unset"
                    }
                }
            },

            new Trailer
            {
                Id = "94032",
                TrailerNumber = "VT-94032",  
                Status = "arriving", 
                Spot = "S-134", 
                UpdatedAt = "8/15/2026",
                Checklist = new List<ChecklistItem>{
                    new ChecklistItem
                    {
                        Key = "seal",
                        Label = "Seal Intact",
                        Result = "unset"},

                    new ChecklistItem
                    {
                        Key = "Trailer number matches",
                        Label = "Trailer number matches",
                        Result = "unset"},

                    new ChecklistItem
                    {
                        Key = "No visible damage",
                        Label = "No visible damage",
                        Result = "unset"
                    },
                    new ChecklistItem
                    {
                        Key = "Exterior",
                        Label = "Exterior",
                        Result = "unset"
                    },
                    new ChecklistItem
                    {
                        Key = "Cargo",
                        Label = "Cargo",
                        Result = "unset"
                    },
                    new ChecklistItem
                    {
                        Key = "doors secure",
                        Label = "Doors secure",
                        Result = "unset"
                    }
                }
            },
            new Trailer
            {
                Id = "71347",
                TrailerNumber = "VT-71347",  
                Status = "loading", 
                Spot = "S-654", 
                UpdatedAt = "8/16/2026",
                Checklist = new List<ChecklistItem>{
                    new ChecklistItem
                    {
                        Key = "seal",
                        Label = "Seal Intact",
                        Result = "unset"
                    },
                    new ChecklistItem
                    {
                        Key = "Trailer number matches",
                        Label = "Trailer number matches",
                        Result = "unset"
                    },
                    new ChecklistItem
                    {
                        Key = "No visible damage",
                        Label = "No visible damage",
                        Result = "unset"
                    },
                    new ChecklistItem
                    {
                        Key = "Exterior",
                        Label = "Exterior",
                        Result = "unset"
                    },
                    new ChecklistItem
                    {
                        Key = "Cargo",
                        Label = "Cargo",
                        Result = "unset"
                    },
                    new ChecklistItem
                    {
                        Key = "doors secure",
                        Label = "Doors secure",
                        Result = "unset"
                    }
                }
            },
            new Trailer
            {
                Id = "13425",
                TrailerNumber = "VT-13425",  
                Status = "ready", 
                Spot = "S-184", 
                UpdatedAt = "8/17/2026",
                Checklist = new List<ChecklistItem>{
                    new ChecklistItem
                    {
                        Key = "seal",
                        Label = "Seal Intact",
                        Result = "unset"
                    },
                    new ChecklistItem
                    {
                        Key = "Trailer number matches",
                        Label = "Trailer number matches",
                        Result = "unset"
                    },
                new ChecklistItem
                    {
                        Key = "No visible damage",
                        Label = "No visible damage",
                        Result = "unset"
                    },
                    new ChecklistItem
                    {
                        Key = "Exterior",
                        Label = "Exterior",
                        Result = "unset"
                    },
                    new ChecklistItem
                    {
                        Key = "Cargo",
                        Label = "Cargo",
                        Result = "unset"
                    },
                    new ChecklistItem
                    {
                        Key = "doors secure",
                        Label = "Doors secure",
                        Result = "unset"
                    }} },
            new Trailer
            {
                Id = "82363",
                TrailerNumber = "VT-82363",  
                Status = "arriving", 
                Spot = "S-442", 
                UpdatedAt = "8/15/2026",
                Checklist = new List<ChecklistItem>{
                    new ChecklistItem
                    {
                        Key = "seal",
                        Label = "Seal Intact",
                        Result = "unset"
                    },
                    new ChecklistItem
                    {
                        Key = "Trailer number matches",
                        Label = "Trailer number matches",
                        Result = "unset"
                    },
                    new ChecklistItem
                    {
                        Key = "No visible damage",
                        Label = "No visible damage",
                        Result = "unset"
                    },
                    new ChecklistItem
                    {
                        Key = "Exterior",
                        Label = "Exterior",
                        Result = "unset"
                    },
                    new ChecklistItem
                    {
                        Key = "Cargo",
                        Label = "Cargo",
                        Result = "unset"
                    },
                    new ChecklistItem
                    {
                        Key = "doors secure",
                        Label = "Doors secure",
                        Result = "unset"
                    }
                }
            },
            new Trailer
            {
                Id = "24145",
                TrailerNumber = "VT-24145",  
                Status = "loading", 
                Spot = "S-654", 
                UpdatedAt = "8/16/2026",
                Checklist = new List<ChecklistItem>{
                    new ChecklistItem
                    {
                        Key = "seal",
                        Label = "Seal Intact",
                        Result = "unset"
                    },
                    new ChecklistItem
                    {
                        Key = "Trailer number matches",
                        Label = "Trailer number matches",
                        Result = "unset"
                    },
                    new ChecklistItem
                    {
                        Key = "No visible damage",
                        Label = "No visible damage",
                        Result = "unset"
                    },
                    new ChecklistItem
                    {
                        Key = "Exterior",
                        Label = "Exterior",
                        Result = "unset"
                    },
                    new ChecklistItem
                    {
                        Key = "Cargo",
                        Label = "Cargo",
                        Result = "unset"
                    },
                    new ChecklistItem
                    {
                        Key = "doors secure",
                        Label = "Doors secure",
                        Result = "unset"
                    }
                }
            },
            new Trailer
            {
                Id = "65109",
                TrailerNumber = "VT-65109",  
                Status = "departed", 
                Spot = "S-983", 
                UpdatedAt = "8/18/2026",
                Checklist = new List<ChecklistItem>{
                    new ChecklistItem
                    {
                        Key = "seal",
                        Label = "Seal Intact",
                        Result = "unset"
                    },
                    new ChecklistItem
                    {
                        Key = "Trailer number matches",
                        Label = "Trailer number matches",
                        Result = "unset"
                    },
                    new ChecklistItem
                    {
                        Key = "No visible damage",
                        Label = "No visible damage",
                        Result = "unset"
                    },
                    new ChecklistItem
                    {
                        Key = "Exterior",
                        Label = "Exterior",
                        Result = "unset"
                    },
                    new ChecklistItem
                    {
                        Key = "Cargo",
                        Label = "Cargo",
                        Result = "unset"
                    },
                    new ChecklistItem
                    {
                        Key = "doors secure",
                        Label = "Doors secure",
                        Result = "unset"
                    }
                }
            },
            new Trailer
            {
                Id = "38452",
                TrailerNumber = "VT-38452",  
                Status = "departed", 
                Spot = "S-753", 
                UpdatedAt = "8/18/2026",
                Checklist = new List<ChecklistItem>{
                    new ChecklistItem
                    {
                        Key = "seal",
                        Label = "Seal Intact",
                        Result = "unset"
                    },
                    new ChecklistItem
                    {
                        Key = "Trailer number matches",
                        Label = "Trailer number matches",
                        Result = "unset"
                    },
                    new ChecklistItem
                    {
                        Key = "No visible damage",
                        Label = "No visible damage",
                        Result = "unset"
                    },
                    new ChecklistItem
                    {
                        Key = "Exterior",
                        Label = "Exterior",
                        Result = "unset"
                    },
                    new ChecklistItem
                    {
                        Key = "Cargo",
                        Label = "Cargo",
                        Result = "unset"
                    },
                    new ChecklistItem
                    {
                        Key = "doors secure",
                        Label = "Doors secure",
                        Result = "unset"
                    }
                }
            },

        };
        return Ok(trailers);
    }



}
