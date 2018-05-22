using System.Collections.Generic;

namespace Bear {
  class Bear {
    private string name;

    private int age;

    private sdouble weight;

    public string Name
    {
        get { return name; }
        set { name = value; }
    }

    public int Age {
      get { return age; }
      set { age = value; }
    }

    public double Weight {
      get { return weight; }
      set { weight = value; }
    }

    private List<IFood> belly;
    
    public Bear (string name, int age, double weight)
    {
      this.name = name;
      this.age = age;
      this.weight = weight;
      this.belly = new List<IFood>();
    }

    public bool ReadyToHibernate()
    {
      return (this.weight >= 80);
    }

    public int FoodCount()
    {
      return belly.Count;
    }

    public void Eat(IFood food)
    {
      belly.Add(food);
    }

    public void Sleep() 
    {
      belly.Clear();
    }
  }
}