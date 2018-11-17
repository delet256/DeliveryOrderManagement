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
        public DbSet<Order> Order { get; set; }

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
            //  optionsBuilder.UseSqlServer(@"Server=(localdb)\\mssqllocaldb;Database=CommercialsTVStanddb;Trusted_Connection=True;Integrated Security=SSPI;AttachDbFileName=c:\\deletTemp\\CommercialsTVStanddb.mdf");
            optionsBuilder.UseSqlServer(@"Server=(localdb)\mssqllocaldb;Database=order222;Trusted_Connection=True;Integrated Security=SSPI;AttachDbFileName=C:\\deletTemp\\order222.mdf");

        }
    }
}
