using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Storage;

namespace DeliveryOrderManagement.Models
{
    public class OrderContext : DbContext
    {
        public DbSet<Order> Orders { get; set; }

        public OrderContext()
        {
            Database.EnsureCreated();
        }
        public OrderContext(DbContextOptions<OrderContext> options)
            : base(options)
        {
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            //  optionsBuilder.UseSqlServer(@"Server=(localdb)\mssqllocaldb;Database=order15544;Trusted_Connection=True;Integrated Security=SSPI;AttachDbFileName=C:\\deletTemp\\order15544.mdf");
            optionsBuilder.UseSqlite("Data Source=orders.db");
        }
    }
}
