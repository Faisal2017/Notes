namespace WizardManagement
{
  public class Wizard
  {
    private string _name;
    private Broomstick _broomstick;

    public string name 
    {
      get { return _name; }
      set { _name = value; }
    }

    public Broomstick broomstick
    {
      get { return _broomstick; }
      set { _broomstick = value; }
    }
    
    public Wizard(string name, Broomstick broomstick)
    {
      this.name = name;
      this.broomstick = broomstick;
    }

    public string Fly()
    {
      return this.broomstick.Fly();
    }
  }
}