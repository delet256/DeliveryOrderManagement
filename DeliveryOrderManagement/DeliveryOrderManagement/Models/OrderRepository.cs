using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;



namespace DeliveryOrderManagement.Models
{
    public class OrderRepository
    {
        OrderContext db = new OrderContext();
        /// <summary>
        /// Get list of all orders from database
        /// </summary>
        public IEnumerable<Order> GetAllOrders()
        {
            return db.Orders.ToList();
        }

        /// <summary>
        /// Add order on database
        /// </summary>
        /// <param name="order">Order for to add from database</param>
        public int AddOrder(Order order)
        {

            db.Orders.Add(order);
            db.SaveChanges();
            db.Entry(order).GetDatabaseValues();
            return order.Id;
        }

        /// <summary>
        /// To Update the records of a particular order on database
        /// </summary>
        /// <param name="order">Order for to update from database</param>
        public int UpdateOrder(Order order)
        {
            db.Entry(order).State = EntityState.Modified;
            db.SaveChanges();
            return order.Id;
        }

        /// <summary>
        /// Get the details of a particular order  on database
        /// </summary>
        /// <param name="id">Order number to get from database</param>
        public Order GetOrderData(int id)
        {
            Order employee = db.Orders.Find(id);
            return employee;
        }

        /// <summary>
        /// To Delete the record of a particular order  
        /// </summary>
        /// <param name="id">order number to delete from database</param>
        public int DeleteOrder(int id)
        {
            Order emp = db.Orders.Find(id);
            db.Orders.Remove(emp);
            db.SaveChanges();
            return id;
        }






    }
}
