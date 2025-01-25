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

        public ActionResult Map()
        {
            ViewBag.Message = "Map Page";
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

        // New method for adding features to the database
        [HttpPost]
        public ActionResult insertToDB(servicesSetting mapServiceValues)
        {
            if (mapServiceValues == null)
                return Json(new { success = false, message = "Invalid feature data" }, JsonRequestBehavior.AllowGet);

            try
            {
                // Add the new feature to the database
                _context.servicesSetting.Add(mapServiceValues);
                _context.SaveChanges();

                return Json(new { success = true, message = "Feature added successfully" }, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                return Json(new { success = false, message = "Error: " + ex.Message }, JsonRequestBehavior.AllowGet);
            }
        }

    }
}