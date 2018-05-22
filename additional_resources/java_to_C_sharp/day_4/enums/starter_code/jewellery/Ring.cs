namespace Jewellery 
{
  public class Ring 
  {
    private string metal;

    public string Metal
    {
      get { return metal; }
      set { metal = value; }
    }

    public Ring(string metal)
    {
      this.metal = metal;
    }
  }
}