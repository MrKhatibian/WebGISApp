using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using WebGISApp.Models;

public class UserController : Controller
{    
    private readonly GisMaryanjEntities _context;


    public UserController(GisMaryanjEntities context)
    {
        _context = context;
    }

    [HttpGet]
    //[Route("api/user/role")]
    public ActionResult GetUserRole(string username)
    {
        if (username is null)
        {
            return Json(new { success = false, message = "user not found" });
        }

        var user = _context.User.FirstOrDefault(u => u.Username == username);
        if (user == null)
        {
            return Json(new { success = false, message = "user not found" });
        }

        return Json(new { role = user.Role, city = user.AllowedCity });
    }
}
