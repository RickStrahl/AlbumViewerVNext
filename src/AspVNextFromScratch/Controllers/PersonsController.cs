using Microsoft.AspNet.Mvc;
using System.Collections.Generic;

// For more information on enabling MVC for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace AspVNextFromScratch
{
public class PersonsController : Controller
{    
    public IActionResult HelloWorldMvc(string name)
    {
        if (string.IsNullOrEmpty(name))
            name = "Mr. Anonymous";

            var person = new Person() { Name = name, Email = "support@buzzbody.com" };
            person.Address.City = "Paia";
            person.Address.Street = "123 Nowhere Lane";

            return View(person);
    }

    public Person HelloWorldApi(string name)
    {
        if (string.IsNullOrEmpty(name))
            name = "Mr. Anonymous";

            var person = new Person() { Name = name, Email = "support@buzzbody.com" };
            person.Address.City = "Paia";
            person.Address.Street = "123 Nowhere Lane";

            return person;
    }

}


    public class Person
    {
        public string Name { get; set; }
        public string Email { get; set; }
        public Address Address { get; set; }

        public Person()
        {
            Address = new Address();
        }

        public static List<Person> GetList()
        {
            return null;
        }
    }

    public class Address
    {
        public string Street { get; set; }
        public string City { get; set; }
        public string State { get; set; }
        public string Zip { get; set; }

    }
}
