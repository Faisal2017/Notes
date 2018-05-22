using Behaviours;

namespace PetShop {
  public class Cat : Pet {
    
    private string name;

    public string Name {
      get { return name; }
      set { name = value; }
    }
  
    public Cat(string name){
      this.name = name;
    }

    public string GetName()
    {
      return this.name;
    }   
  }
}