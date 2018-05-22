namespace Bear {
  public abstract class Bear 
  {
    public abstract void GatherFood();

    public void Roar()
    {
      System.Console.WriteLine("roar!");
    }

    public void TypicalDay()
    {
      WakeUp();
      GatherFood();
      Eat();
      Sleep();
    }

    public virtual void WakeUp()
    {
      System.Console.WriteLine("Waking up");
    }

    public void Eat()
    {
      System.Console.WriteLine("Eating");
    }

    public void Sleep()
    {
      System.Console.WriteLine("Going to sleep");
    }
  }
}
