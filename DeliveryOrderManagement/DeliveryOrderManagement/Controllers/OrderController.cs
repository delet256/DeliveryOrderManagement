using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using DeliveryOrderManagement.Models;


namespace DeliveryOrderManagement.Controllers
{
    /// <summary>
    /// Controller
    /// </summary>
    public class EmployeeController : Controller
    {
        OrderRepository orderRepository = new OrderRepository();

        /// <summary>
        /// Get list of orders
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        [Route("api/Order/Index")]
        public IEnumerable<Order> Index()
        {
            return orderRepository.GetAllOrders();
        }
        /// <summary>
        /// Create order
        /// </summary>
        /// <param name="order">Order for create</param>
        [HttpPost]
        [Route("api/Order/Create")]
        public int Create(Order order)
        {
            return orderRepository.AddOrder(order);
        }
        /// <summary>
        /// Get the order
        /// </summary>
        /// <param name="id">Order number to get</param>
        [HttpGet]
        [Route("api/Order/Details/{id}")]
        public Order Details(int id)
        {
            return orderRepository.GetOrderData(id);
        }
        /// <summary>
        /// Edit the order
        /// </summary>
        /// <param name="order">Order for to edit</param>
        [HttpPut]
        [Route("api/Order/Edit")]
        public int Edit(Order order)
        {
            return orderRepository.UpdateOrder(order);
        }
        /// <summary>
        /// Delete the order
        /// </summary>
        /// <param name="id">order number to delete</param>
        [HttpDelete]
        [Route("api/Order/Delete/{id}")]
        public int Delete(int id)
        {
            return orderRepository.DeleteOrder(id);
        }
    }
}