using System.Collections.Generic;
using Behaviours;

namespace PetShop {
  public class PetShop{

    private List<Pet> stock;

    public PetShop(){
      stock = new List<Pet>();
    }

    public Pet FindPetByName(string searchName) { 
      
      if (searchName == null){
        throw new NullStringException("Cannot search for a  pet with null instead of a name String");
      }   

      string searchLower = searchName.ToLower();
      foreach (Pet pet in stock)
      {
        string petName = pet.GetName().ToLower();
        if ( petName.Equals(searchLower) ) 
          return pet;
      }
      return null;
    }

    public void AddPet(Pet pet){
      stock.Add(pet);
    }

  }
}
