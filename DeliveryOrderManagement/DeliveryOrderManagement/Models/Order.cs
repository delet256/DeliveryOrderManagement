using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DeliveryOrderManagement.Models
{   
    /// <summary>
    /// Model for order
    /// </summary>
    public class Order
    {
        /// <summary>
        /// Gets or sets order number
        /// </summary>
        public int Id { get; set; }
        /// <summary>
        /// Gets or sets sender city
        /// </summary>
        public string SenderCity { get; set; }
        /// <summary>
        /// Gets or sets sender address
        /// </summary>
        public string SenderAddress { get; set; }
        /// <summary>
        /// Gets or sets recipient city
        /// </summary>
        public string RecipientCity { get; set; }
        /// <summary>
        /// Gets or sets recipient address
        /// </summary>
        public string RecipientAddress { get; set; }
        /// <summary>
        /// Gets or sets weight cargo
        /// </summary>
        public int WeightCargo { get; set; }
        /// <summary>
        /// Gets or sets date pick up cargo
        /// </summary>
        public DateTime DatePickupCargo { get; set; }
    }
}
