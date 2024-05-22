using System;
using System.Collections.Generic;

namespace DTO.DTO;

public  class ShipDTO
{
    public int Id { get; set; }

    public string ShipAdress { get; set; } = null!;

    public int UserId { get; set; }

    public string Url { get; set; } = null!;

    public string Name { get; set; } = null!;
    public string? ShipSdress { get; set; }
    public DateTime Date { get; set; }
    public int StatusId { get; set; }

    public int? DriverId { get; set; }
    public DateTime? DateReceived { get; set; }

    public DateTime? Date1 { get; set; }

    public virtual DriverDTO ?Driver { get; set; }

    public virtual StatusDTO ?Status { get; set; }

    public virtual UserDTO ?User { get; set; } = null!;
}
