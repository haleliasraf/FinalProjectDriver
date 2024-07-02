using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.IO;

namespace Finish_Project.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ImageController : ControllerBase
    {
        [HttpPost]
        [Route("uploadImage")]
        public ActionResult UploadImage(IFormFile image)
        {
            var file = image;
            //var file = Request.Form.Files[0];
            //var folderPath = "your/image/folder/path";
            var folderPath = "C:\\Users\\User\\Documents\\FinalProjectDriver\\Frontend\\driver\\public\\invoiceFiles";
            var uniqueFileName = Guid.NewGuid().ToString() +
            Path.GetExtension(file.FileName);
            var filePath = Path.Combine(folderPath, uniqueFileName);
            using (var stream = new FileStream(filePath, FileMode.Create))
            {
                file.CopyTo(stream);
            }
            var imageUrl = "/invoiceFiles/" + uniqueFileName;
            return Ok(imageUrl);
        }
    }
}
