using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AutoMapper;
using DL.DLFunction;
using DL.Models;
using DTO.DTO;

namespace BL
{
    public class AreaBL : IAreaBL
    {
        private IAreaDL _AreaDL;
        private IMapper _mapper;
        public AreaBL(IAreaDL AreaDL, IMapper _mapper)
        {
            this._AreaDL = AreaDL;
            this._mapper = _mapper;
        }

        public async Task<AreaDTO> AddArea(AreaDTO newAreaDTO)
        {
            try

            {
                Area newArea = _mapper.Map<Area>(newAreaDTO);

                Area insertedArea = await _AreaDL.AddArea(newArea);

                return _mapper.Map<AreaDTO>(insertedArea);
            }
            catch (Exception ex)
            {
                throw ex;
            }

        }


        public async Task<List<AreaDTO>> GetArea()
        {
            try
            {

                List<Area> insertedArea = await _AreaDL.GetArea();

                return _mapper.Map<List<AreaDTO>>(insertedArea);
            }
            catch (Exception ex)
            {
                throw ex;
            }

        }

        public async Task<AreaDTO> GetByIdArea(int Area_id)
        {
            try
            {

                Area insertedArea = await _AreaDL.GetByIdArea(Area_id);

                return _mapper.Map<AreaDTO>(insertedArea);
            }
            catch (Exception ex)
            {
                throw ex;
            }

        }

        public async Task<AreaDTO> updatArea(AreaDTO Areadto)
        {
            try
            {
                Area newArea = _mapper.Map<Area>(Areadto);

                Area insertedArea = await _AreaDL.updateArea(newArea);

                return _mapper.Map<AreaDTO>(insertedArea);
            }
            catch (Exception ex)
            {
                return null;
                throw ex;
            }

        }
        public async Task<bool> DeleteArea(int Area_id)
        {
            try
            {

                bool deletedArea = await _AreaDL.DeleteArea(Area_id);

                return deletedArea;
            }
            catch (Exception ex)
            {
                //return null;
                throw ex;
            }

        }
    }
}
