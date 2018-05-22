using System;

namespace PetShop {
  public class NullStringException : Exception{
    public NullStringException(string message) : base (message) {
      
    }
  }
}