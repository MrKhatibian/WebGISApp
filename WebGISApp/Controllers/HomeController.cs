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
                
                return Json(new { success = true, message = "Successful" }, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                return Json(new { success = false, message = "Unsuccessful" + ex.Message }, JsonRequestBehavior.AllowGet);
            }
        }
        // Get all features
        [HttpGet]
        public ActionResult GetFeatures()
        {
            var features = _context.servicesSetting.ToList();
            return Json(features.Select(f => new
            {
                ID = f.ID,
                mapService = f.mapService,
                printService = f.printService               
            }), JsonRequestBehavior.AllowGet);
        }       

        // Update an existing feature
        [HttpPost]
        public ActionResult UpdateFeature(servicesSetting mapServiceValues)
        {
            if (mapServiceValues == null)
                return Json(new { success = false, message = "Invalid data" });

            try
            {
                var feature = _context.servicesSetting.FirstOrDefault(f => f.ID == mapServiceValues.ID);
                if (feature == null)
                    return Json(new { success = false, message = "Feature not found" });

                // Update the fields
                feature.mapService = mapServiceValues.mapService;
                feature.printService = mapServiceValues.printService;               

                _context.SaveChanges();

                return Json(new { success = true, message = "Feature updated successfully" });
            }
            catch (Exception ex)
            {
                return Json(new { success = false, message = "Error: " + ex.Message });
            }
        }

        // Delete a feature
        [HttpPost]
        public ActionResult DeleteFeature(int id)
        {
            try
            {
                var feature = _context.servicesSetting.FirstOrDefault(f => f.ID == id);
                if (feature == null)
                    return Json(new { success = false, message = "Feature not found" });

                _context.servicesSetting.Remove(feature);
                _context.SaveChanges();

                return Json(new { success = true, message = "Feature deleted successfully" });
            }
            catch (Exception ex)
            {
                return Json(new { success = false, message = "Error: " + ex.Message });
            }
        }


    }
}