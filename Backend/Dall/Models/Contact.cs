using System;
using System.Collections.Generic;

namespace DL.Models;

public  class Contact
{
    public int Id { get; set; }

    public string? Phon { get; set; }

    public string? Name { get; set; }

    public string? Details { get; set; }

    public DateTime Date { get; set; }

    public string? Status { get; set; }
}
