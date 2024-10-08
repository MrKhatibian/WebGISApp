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
    
    public partial class SDE_table_registry
    {
        public SDE_table_registry()
        {
            this.SDE_archives1 = new HashSet<SDE_archives>();
            this.SDE_xml_columns = new HashSet<SDE_xml_columns>();
            this.SDE_states = new HashSet<SDE_states>();
        }
    
        public int registration_id { get; set; }
        public string database_name { get; set; }
        public string table_name { get; set; }
        public string owner { get; set; }
        public string rowid_column { get; set; }
        public string description { get; set; }
        public int object_flags { get; set; }
        public int registration_date { get; set; }
        public string config_keyword { get; set; }
        public Nullable<int> minimum_id { get; set; }
        public string imv_view_name { get; set; }
    
        public virtual SDE_archives SDE_archives { get; set; }
        public virtual ICollection<SDE_archives> SDE_archives1 { get; set; }
        public virtual ICollection<SDE_xml_columns> SDE_xml_columns { get; set; }
        public virtual ICollection<SDE_states> SDE_states { get; set; }
    }
}
