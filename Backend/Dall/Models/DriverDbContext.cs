using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace DL.Models;

public partial class DriverDbContext : DbContext
{
    public DriverDbContext()
    {
    }

    public DriverDbContext(DbContextOptions<DriverDbContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Area> Areas { get; set; }

    public virtual DbSet<Contact> Contacts { get; set; }

    public virtual DbSet<Driver> Drivers { get; set; }

    public virtual DbSet<Ship> Ships { get; set; }

    public virtual DbSet<Status> Statuses { get; set; }

    public virtual DbSet<UpcomingTravel> UpcomingTravels { get; set; }

    public virtual DbSet<User> Users { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see https://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseSqlServer("Server=.;Database=DriverDB;Trusted_Connection=True; TrustServerCertificate=True;");
            //=> optionsBuilder.UseSqlServer("Server=DESKTOP-M884RIP;Database=DriverDB;Trusted_Connection=True; TrustServerCertificate=True;");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Area>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Area__3214EC07F1CE0C9C");

            entity.ToTable("Area");

            entity.Property(e => e.Description)
                .HasMaxLength(100)
                .IsUnicode(false);
        });

        modelBuilder.Entity<Contact>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__contact__3214EC071CD37285");

            entity.ToTable("contact");

            entity.Property(e => e.Details)
                .HasMaxLength(100)
                .IsUnicode(false);
            entity.Property(e => e.Name)
                .HasMaxLength(100)
                .IsUnicode(false);
            entity.Property(e => e.Phon)
                .HasMaxLength(100)
                .IsUnicode(false);
            entity.Property(e => e.Status)
                .HasMaxLength(100)
                .IsUnicode(false)
                .HasColumnName("status");
        });

        modelBuilder.Entity<Driver>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Driver__3214EC077551DDBC");

            entity.ToTable("Driver");

            entity.Property(e => e.Name).HasMaxLength(50);
            entity.Property(e => e.Phon).HasMaxLength(50);
            entity.Property(e => e.TypeTaxis)
                .HasMaxLength(10)
                .IsFixedLength()
                .HasColumnName("typeTaxis");
        });

        modelBuilder.Entity<Ship>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Ship__3214EC07B7FD29BF");

            entity.ToTable("Ship");

            entity.Property(e => e.Date1).HasColumnName("date_");
            entity.Property(e => e.DateReceived).HasColumnName("date_Received");
            entity.Property(e => e.DriverId).HasColumnName("Driver_id");
            entity.Property(e => e.Name)
                .HasMaxLength(100)
                .IsUnicode(false)
                .HasColumnName("Name_");
            entity.Property(e => e.ShipAdress)
                .HasMaxLength(100)
                .IsUnicode(false)
                .HasColumnName("Ship_adress");
            entity.Property(e => e.ShipSdress)
                .HasMaxLength(100)
                .IsUnicode(false)
                .HasColumnName("ship sdress");
            entity.Property(e => e.StatusId).HasColumnName("Status_id");
            entity.Property(e => e.Url)
                .HasMaxLength(100)
                .IsUnicode(false)
                .HasColumnName("URL");
            entity.Property(e => e.UserId).HasColumnName("User_id");

            entity.HasOne(d => d.Driver).WithMany(p => p.Ships)
                .HasForeignKey(d => d.DriverId)
                .HasConstraintName("FK__Ship__Driver_id__5535A963");

            entity.HasOne(d => d.Status).WithMany(p => p.Ships)
                .HasForeignKey(d => d.StatusId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK__Ship__Status_id__5441852A");

            entity.HasOne(d => d.User).WithMany(p => p.Ships)
                .HasForeignKey(d => d.UserId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK__Ship__User_id__534D60F1");
        });

        modelBuilder.Entity<Status>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Status__3214EC073945B3CB");

            entity.ToTable("Status");

            entity.Property(e => e.Description)
                .HasMaxLength(100)
                .IsUnicode(false);
        });

        modelBuilder.Entity<UpcomingTravel>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Upcoming__3214EC07B1A4D317");

            entity.Property(e => e.AdressExit)
                .HasMaxLength(100)
                .IsUnicode(false)
                .HasColumnName("Adress_exit");
            entity.Property(e => e.AdressGounn)
                .HasMaxLength(100)
                .IsUnicode(false)
                .HasColumnName("Adress_gounn");
            entity.Property(e => e.AreaId).HasColumnName("Area_id");
            entity.Property(e => e.DriverId).HasColumnName("Driver_id");
            entity.Property(e => e.Numpassenger).HasColumnName("numpassenger");
            entity.Property(e => e.Phone)
                .HasMaxLength(10)
                .IsUnicode(false)
                .HasColumnName("phone");
            entity.Property(e => e.Time)
                .HasMaxLength(100)
                .IsUnicode(false);
            entity.Property(e => e.UserId).HasColumnName("User_id");

            entity.HasOne(d => d.Area).WithMany(p => p.UpcomingTravels)
                .HasForeignKey(d => d.AreaId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK__UpcomingT__Area___5812160E");

            entity.HasOne(d => d.Driver).WithMany(p => p.UpcomingTravels)
                .HasForeignKey(d => d.DriverId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK__UpcomingT__Drive__59FA5E80");

            entity.HasOne(d => d.User).WithMany(p => p.UpcomingTravels)
                .HasForeignKey(d => d.UserId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK__UpcomingT__User___59063A47");
        });

        modelBuilder.Entity<User>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Users__3214EC07ACE1FEAE");

            entity.Property(e => e.Email)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.FirstName).HasMaxLength(50);
            entity.Property(e => e.LastName)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.Password).HasMaxLength(50);
            entity.Property(e => e.Phone).HasMaxLength(50);
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
