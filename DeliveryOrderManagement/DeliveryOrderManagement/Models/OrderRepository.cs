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

        public IEnumerable<Order> GetAllOrders()
        {
            try
            {
                return db.Order.ToList();
            }
            catch
            {
                throw;
            }
        }

        //To Add new order record     
        public int AddOrder(Order order)
        {
            try
            {
                db.Order.Add(order);
                db.SaveChanges();
                return 1;
            }
            catch
            {
                throw;
            }
        }


        //To Update the records of a particluar oreder   
        public int UpdateOrder(Order order)
        {
            try
            {
                db.Entry(order).State = EntityState.Modified;
                db.SaveChanges();
                return 1;
            }
            catch
            {
                throw;
            }
        }


        //Get the details of a particular order    
        public Order GetOrderData(int id)
        {
            try
            {
                Order employee = db.Order.Find(id);
                return employee;
            }
            catch
            {
                throw;
            }
        }

        //To Delete the record of a particular order    
        public int DeleteOrder(int id)
        {
            try
            {
                Order emp = db.Order.Find(id);
                db.Order.Remove(emp);
                db.SaveChanges();
                return 1;
            }
            catch
            {
                throw;
            }
        }






    }
}
