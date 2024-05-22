using System;
using System.Collections.Generic;

namespace DTO.DTO;

public class ContactDTO
{
    public int Id { get; set; }

    public string Phon { get; set; } = null!;

    public string Name { get; set; } = null!;

    public string Details { get; set; } = null!;

    public DateTime Date { get; set; }
    public string? Status { get; set; }
}
