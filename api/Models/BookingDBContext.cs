using Microsoft.EntityFrameworkCore;

namespace sad_react_WebAPI.Models
{
    public class BookingDBContext : DbContext
    {
        public BookingDBContext(DbContextOptions<BookingDBContext> options) : base(options)
        {

        }

        public DbSet<EventClient> EventClients { get; set; }
    }
}
