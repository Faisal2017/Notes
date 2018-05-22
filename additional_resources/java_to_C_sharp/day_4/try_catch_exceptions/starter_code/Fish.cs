using Behaviours;

namespace PetShop {
  public class Fish : Pet {
    private string name;

    public string Name {
      get { return name; }
      set { name = value; }
    }
  
    public Fish(string name)
    {
      this.name = name;
    }  
  }
}