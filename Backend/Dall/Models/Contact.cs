using System;
using System.Collections.Generic;

namespace DL.Models;

public partial class Contact
{
    public int Id { get; set; }

    public string? Phon { get; set; }

    public string? Name { get; set; }

    public string? Details { get; set; }

    public DateTime Date { get; set; }

    public string? Status { get; set; }

    public int StatusId { get; set; }

    public virtual Status StatusNavigation { get; set; } = null!;
}
