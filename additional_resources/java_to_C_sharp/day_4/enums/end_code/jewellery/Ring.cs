namespace Jewellery 
{
  public class Ring 
  {
    private MetalType metal;

    public MetalType Metal
    {
      get { return metal; }
      set { metal = value; }
    }

    public Ring(MetalType metal)
    {
      this.metal = metal;
    }
  }
}