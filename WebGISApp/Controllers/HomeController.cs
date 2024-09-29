using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using WebGISApp.Models;

namespace WebGISApp.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }

        private readonly GisMaryanjEntities _context;

        public HomeController()
        {
            _context = new GisMaryanjEntities();
        }

        [HttpGet]
        public ActionResult GetFeatures()
        {
            // Query FeatureClasses from the database
            var features = _context.ARSE.ToList();

            // Return the features as JSON (including geometries)
            return Json(features, JsonRequestBehavior.AllowGet);
        }
    }
}