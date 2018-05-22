using Behaviours;

namespace PetShop {
  public class ExampleTryCatch{
    PetShop shop;

    public void Run(){
      try {
        Setup();
        // Following throws System.NullReferenceException:
        //Pet found = shop.FindPetByName(null);
        // Following works
        Pet found = shop.FindPetByName("Meowingtons");
        System.Console.WriteLine("Found pet: " + found.GetName());
      }
      catch (NullStringException ex) {
        System.Console.WriteLine("Exception Message:");
        System.Console.WriteLine(ex.Message);
        System.Console.WriteLine(ex.StackTrace);
      }
      finally {
        System.Console.WriteLine("and finally...");
        System.Console.WriteLine("I'm done.");
      }
    }

    public void Setup(){
      shop = new PetShop();
      shop.AddPet(new Dog("Rover"));
      shop.AddPet(new Cat("MEOWingtons"));
      shop.AddPet(new Fish("FINlay"));
    }
  }
}