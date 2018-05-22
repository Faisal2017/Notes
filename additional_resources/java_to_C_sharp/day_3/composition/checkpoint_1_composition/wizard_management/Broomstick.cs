using Behaviours;

namespace WizardManagement {
  public class Broomstick : CleaningImplement, IFly {
    private int _speed;

    public int speed
    {
        get { return _speed; }
        set { _speed = value; }
    }

    public Broomstick(string brand, int speed) : base(brand)
    {
      this.speed = speed;
    }

    public int GetSpeed(){
      return this.speed;
    }

    public string Fly(){
      return "mounting broom, running, skipping, flying!";
    }
  }

}