using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using DeliveryOrderManagement.Models;


namespace DeliveryOrderManagement.Controllers
{
    public class EmployeeController : Controller
    {
        OrderRepository objOrder = new OrderRepository();

        [HttpGet]
        [Route("api/Employee/Index")]
        public IEnumerable<Order> Index()
        {
            return objOrder.GetAllOrders();
        }

        [HttpPost]
        [Route("api/Employee/Create")]
        public int Create(Order order)
        {
            return objOrder.AddOrder(order);
        }

        [HttpGet]
        [Route("api/Employee/Details/{id}")]
        public Order Details(int id)
        {
            return objOrder.GetOrderData(id);
        }
        [HttpPut]
        [Route("api/Employee/Edit")]
        public int Edit(Order order)
        {
            return objOrder.UpdateOrder(order);
        }
        [HttpDelete]
        [Route("api/Employee/Delete/{id}")]
        public int Delete(int id)
        {
            return objOrder.DeleteOrder(id);
        }



        /*

        [HttpGet]
        [Route("api/Employee/GetCityList")]
        public IEnumerable<TblCities> Details()
        {
            return objorder.GetCities();
        }

        */


    }
}