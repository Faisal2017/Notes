namespace Bear {
  public class GrizzlyBear : Bear 
  {
    public override void GatherFood()
    {
      System.Console.WriteLine("Off to farmfoods!");
    }

    public override void WakeUp()
    {
      System.Console.WriteLine("Slept in");
    }
  }
}