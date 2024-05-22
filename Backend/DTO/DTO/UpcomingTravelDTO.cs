using DL.Models;
using System;
using System.Collections.Generic;

namespace DTO.DTO;

public  class UpcomingTravelDTO
{
    public int Id { get; set; }

    public int AreaId { get; set; }

    public string AdressExit { get; set; } = null!;

    public string AdressGounn { get; set; } = null!;

    public int UserId { get; set; }

    public int Payment { get; set; }

    public DateTime Date { get; set; }

    public int DriverId { get; set; }

    public string Time { get; set; } = null!;

    public string Phone { get; set; } = null!;

    public int Numpassenger { get; set; }
    public virtual AreaDTO ?Area { get; set; } = null!;

    public virtual DriverDTO ?Driver { get; set; } = null!;

    public virtual UserDTO ?User { get; set; } = null!;
}
