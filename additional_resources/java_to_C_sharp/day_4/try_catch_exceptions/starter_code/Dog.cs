using Behaviours;

namespace PetShop {
  public class Dog : Pet 
  {
    private string name;

    public string Name {
      get { return name; }
      set { name = value; }
    }
  
    public Dog(string name)
    {
      this.name = name;
    }

    public string GetName()
    {
      return this.name;
    }  
  }
}