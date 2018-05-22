using System.Collections.Generic;

namespace Bear {
  class Bear {
    private string name;

    private int age;

    private double weight;

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

    private List<Salmon> bellySalmon;
    private List<Human> bellyHuman;
    
    public Bear (string name, int age, double weight)
    {
      this.name = name;
      this.age = age;
      this.weight = weight;
      this.bellySalmon = new List<Salmon>();
      this.bellyHuman = new List<Human>();
    }

    public bool ReadyToHibernate()
    {
      return (this.weight >= 80);
    }

    public int FoodCount()
    {
      return bellySalmon.Count + bellyHuman.Count;
    }

    public void Eat(Salmon salmon)
    {
      bellySalmon.Add(salmon);
    }

    public void Eat(Human human)
    {
      bellyHuman.Add(human);
    }

    public void Sleep() 
    {
      bellySalmon.Clear();
      bellyHuman.Clear();
    }
  }
}