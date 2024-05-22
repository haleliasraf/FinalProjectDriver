using AutoMapper;
using BL;
using DL.DLFunction;
using DL.Models;
using DTO.DTO;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
builder.Services.AddCors();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddScoped<IUserBL,UserBL>();
builder.Services.AddScoped<IUserDL,UserDL>();
builder.Services.AddScoped<IDriverBL, DriverBL>();
builder.Services.AddScoped<IDriverDL, DriverDL>();
builder.Services.AddAutoMapper(typeof(DriverMapper));
builder.Services.AddScoped<IAreaBL, AreaBL>();
builder.Services.AddScoped<IAreaDL, AreaDL>();
builder.Services.AddScoped<IShipBL, ShipBL>();
builder.Services.AddScoped<IShipDL, ShipDL>();
builder.Services.AddScoped<IStatusBL, StatusBL>();
builder.Services.AddScoped<IStatusDL, StatusDL>();
builder.Services.AddScoped<IContactBL, ContactBL>();
builder.Services.AddScoped<IContactDL, ContactDL>();
builder.Services.AddScoped<IUpcomingTravelsBL, UpcomingTravelsBL>();
builder.Services.AddScoped<IUpcomingTravelD, UpcomingTravelD>();
//builder.Services.AddAutoMapper(typeof(AreaMapper);
builder.Services.AddDbContext<DriverDbContext>(options =>
    options.UseSqlServer("Server=DESKTOP-M884RIP;Database=DriverDB;Trusted_Connection=True;TrustServerCertificate=True;"));

var app = builder.Build();

app.UseCors(options => options.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod());

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
