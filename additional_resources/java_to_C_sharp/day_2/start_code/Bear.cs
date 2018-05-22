namespace Bear {
  class Bear {
    string name;

    int age;

    double weight;

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

    private Salmon[] belly;
    
    public Bear (string name, int age, double weight)
    {
      this.name = name;
      this.age = age;
      this.weight = weight;
      this.belly = new Salmon[5];
    }

    public bool ReadyToHibernate()
    {
      return (this.weight >= 80);
    }

    public int FoodCount()
    {
      int count = 0;
      foreach(var salmon in belly){
        if (salmon != null){
          count++;
        }
      }
      return count;
    }
    
    public bool BellyFull(){
      return FoodCount() == belly.Length;
    }

    public void Eat(Salmon salmon)
    {
      if (BellyFull()) 
      {
        return;
      }
      int foodCount = FoodCount();
      belly[foodCount] = salmon;
    }

    public void Sleep() 
    {
      for (int i = 0; i < belly.Length; i++) 
      {
        belly[i] = null;
      }

    }
  }
}