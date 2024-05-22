using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DL.Models;

namespace DTO.DTO
{
    public class DriverMapper : Profile
    {

        public DriverMapper() {


            CreateMap<UserDTO, User>().ReverseMap();
            CreateMap<DriverDTO, Driver>().ReverseMap();
            CreateMap<AreaDTO,Area>().ReverseMap();
            CreateMap<ShipDTO, Ship>().ReverseMap();
            CreateMap<StatusDTO, Status>().ReverseMap();
            CreateMap<ContactDTO, Contact>().ReverseMap();
            CreateMap<UpcomingTravelDTO, UpcomingTravel>().ReverseMap();

        }
    }
}
