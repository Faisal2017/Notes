namespace WizardManagement {
  public abstract class CleaningImplement {
    
    string _brand;

    public string brand
    {
        get { return _brand; }
        set { _brand = value; }
    }
  
    public CleaningImplement() {

    }
    
    public CleaningImplement(string brand) {
      this.brand = brand;
    }
    
  }
}