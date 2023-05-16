using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace sad_react_WebAPI.Models
{
    public class EventClient
    {
        [Key]
        public int id { get; set; }
        
        [Column(TypeName="nvarchar(100)")]
        public string eventName { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        public string type { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        public string? others { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        public string? startTime { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        public string? endTime { get; set; }

        [Column(TypeName = "nvarchar(255)")]
        public string location { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        public string? eventDate { get; set; }

    }
}
