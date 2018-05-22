using Behaviours;

namespace WizardManagement
{
  public class Wizard
  {
    private string _name;
    private IFly _ride;

    public string name 
    {
      get { return _name; }
      set { _name = value; }
    }

    public IFly ride
    {
      get { return _ride; }
      set { _ride = value; }
    }
    
    public Wizard(string name, IFly ride)
    {
      this.name = name;
      this.ride = ride;
    }

    public string Fly()
    {
      return this.ride
      .Fly();
    }
  }
}