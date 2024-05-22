using System;
using System.Collections.Generic;

namespace DTO.DTO;

public  class StatusDTO
{
    public int Id { get; set; }

    public string Description { get; set; } = null!;

    //public virtual ICollection<ShipDTO> Ships { get; set; } = new List<ShipDTO>();
}
