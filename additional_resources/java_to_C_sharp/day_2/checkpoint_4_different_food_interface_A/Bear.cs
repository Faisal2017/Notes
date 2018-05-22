using System.Collections.Generic;

namespace Bear {
  class Bear {
    private string _name;

    private int _age;

    private double _weight;

    public string Name { 
      get { return _name; }
      set { _name = value; } 
    }

    public int Age { 
      get { return _age; } 
      set { _age = value; } 
    }

    public double Weight { 
      get { return _weight; } 
      set { _weight = value; }  
    }

    private List<IFood> belly;
    
    public Bear (string name, int age, double weight)
    {
      this._name = name;
      this._age = age;
      this._weight = weight;
      this.belly = new List<IFood>();
      //this.bellyHuman = new List<Human>();
    }

    public bool ReadyToHibernate()
    {
      return (this._weight >= 80);
    }

    public int FoodCount()
    {
      // int count = 0;
      // foreach (var salmon in belly) 
      // {
      //   if (salmon != null) {
      //     count++;
      //   }
      // }
      // return count;
      return belly.Count;// + bellySalmon.Count;
    }

    public void Eat(IFood food)
    {
      // if (BellyFull()) 
      // {
        // return;
      // }

      // int foodCount = FoodCount();
      // belly[foodCount] = salmon;
      belly.Add(food);
    }

    // public void Eat(Human human)
    // {
    //   bellyHuman.Add(human);
    // }

    // public bool BellyFull()
    // {
    //   return (FoodCount() == belly.Length);
    // }

    public void Sleep() 
    {
      // for(int i = 0; i < belly.Length; i++)
      // {
      //   belly[i] = null;
      // }
      belly.Clear();
      //bellyHuman.Clear();
    }

    public IFood ThrowUp(){
      if(FoodCount() > 0) {
        IFood food = belly[0];
        belly.RemoveAt(0);
        return food;
      }
      return null;
    }
  }
}