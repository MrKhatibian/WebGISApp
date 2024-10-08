//------------------------------------------------------------------------------
// <auto-generated>
//    This code was generated from a template.
//
//    Manual changes to this file may cause unexpected behavior in your application.
//    Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace WebGISApp.Models
{
    using System;
    using System.Collections.Generic;
    
    public partial class SDE_spatial_references
    {
        public SDE_spatial_references()
        {
            this.SDE_geometry_columns = new HashSet<SDE_geometry_columns>();
            this.SDE_layers = new HashSet<SDE_layers>();
            this.SDE_layers1 = new HashSet<SDE_layers>();
            this.SDE_raster_columns = new HashSet<SDE_raster_columns>();
        }
    
        public int srid { get; set; }
        public string description { get; set; }
        public string auth_name { get; set; }
        public Nullable<int> auth_srid { get; set; }
        public double falsex { get; set; }
        public double falsey { get; set; }
        public double xyunits { get; set; }
        public double falsez { get; set; }
        public double zunits { get; set; }
        public double falsem { get; set; }
        public double munits { get; set; }
        public Nullable<double> xycluster_tol { get; set; }
        public Nullable<double> zcluster_tol { get; set; }
        public Nullable<double> mcluster_tol { get; set; }
        public int object_flags { get; set; }
        public string srtext { get; set; }
    
        public virtual ICollection<SDE_geometry_columns> SDE_geometry_columns { get; set; }
        public virtual ICollection<SDE_layers> SDE_layers { get; set; }
        public virtual ICollection<SDE_layers> SDE_layers1 { get; set; }
        public virtual ICollection<SDE_raster_columns> SDE_raster_columns { get; set; }
    }
}
