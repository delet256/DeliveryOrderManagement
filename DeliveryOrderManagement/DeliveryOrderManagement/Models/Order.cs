using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DeliveryOrderManagement.Models
{
    public class Order
    {
        public int Id { get; set; }
        public string SenderCity { get; set; }
        public string SenderAddress { get; set; }
        public string RecipientCity { get; set; }
        public string RecipientAddress { get; set; }
        public int WeightCargo { get; set; }
        public DateTime DatePickupCargo { get; set; }
    }
}
