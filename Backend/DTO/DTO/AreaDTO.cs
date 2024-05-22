using System;
using System.Collections.Generic;

namespace DTO.DTO;

public class AreaDTO
{
    public int Id { get; set; }

    public string Description { get; set; } = null!;

    //public virtual ICollection<UpcomingTravelDTO> UpcomingTravels { get; set; } = new List<UpcomingTravelDTO>();
}
