namespace WizardManagement {
   public abstract class MythicalBeast {

    private string _name;

    public string name 
    {
      get { return _name; }
      set { _name = value; }
    }

    public MythicalBeast(string name)
    {
      this.name = name;
    }
  }
}